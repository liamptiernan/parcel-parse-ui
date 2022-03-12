import CsvDownload from '../components/csv_download/csv_download.jsx';
import Header from '../components/header/header.jsx';
import Table from '../components/table/item-list';

import operators from '../utils/operators';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

const defaultFilter = {
  conditions: [
    {
      field: null,
      logic: null,
      value: ''
    }
  ],
  conjunction: 'and'
}

function filterData(data, filters) {
  /*
   * Take array of filter objects and apply logic to data
   */

  const workingData = data;
  let filteredData = filters.conjunction === 'and' ? data : [];
  for (const filter of filters.conditions) {
    if (filter.field && filter.logic) {
      if (filters.conjunction === 'and') {
        const currentFilter = operators(filteredData, filter, filter.logic)
        filteredData = currentFilter.newData;
      } else {
        const currentFilter = operators(workingData, filter, filter.logic);
        filteredData = filteredData.concat(currentFilter.newData);
        workingData = currentFilter.inverse;
      }
    }
  }
  
  return filteredData;
}

function Home(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(defaultFilter);
  const [parcelList, setParcelList] = useState();
  const [timer, setTimer] = useState();

  const updateTable = () => {
    const filteredData = filterData(data, filters);
    setFilteredData(filteredData);
  }

  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(updateTable, 500);
    setTimer(timer);
  }, [filters])

  const addFilter = () => {
    const newFilters = filters;
    
    const newCondition = {
      field: null,
      logic: null,
      value: ''
    }
    newFilters.conditions = newFilters.conditions.concat(newCondition);

    setFilters(newFilters)
  }

  const updateFilter = (target, field, i) => {
    const newConditions = filters.conditions.slice();
    newConditions[i][field] = target.value;

    if (field === 'field') {
      newConditions[i]['logic'] = null;
      newConditions[i]['value'] = '';
    }
    const newFilters = {
      conjunction: filters.conjunction,
      conditions: newConditions
    }

    setFilters(newFilters);
  }

  const updateConjunction = (target) => {
    const newFilters = {
      conjunction: target.value,
      conditions: filters.conditions
    }

    setFilters(newFilters);
  }

  const deleteFilter = (i) => {
    const newConditions = filters.conditions.slice();
    newConditions.splice(i, 1);

    const newFilters = {
      conjunction: filters.conjunction,
      conditions: newConditions
    }

    setFilters(newFilters);
  }

  const updateData = async () => {
    let offset = 0;
    const completeRes = [];
    while (true) {
      const res = await fetch(`https://parcel-parse.herokuapp.com/api/list?listName=${parcelList}&pageSize=500&offset=${offset}`, {headers: {Authorization: 'ZunderBunder2558'}})  
      const json = await res.json();

      if (json.length === 0) {
        break;
      }
      completeRes = completeRes.concat(json)
      offset = offset + 500;
    }

    setData(completeRes);
    setFilteredData(completeRes);
  }

  return (
    <div className={styles.container}>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <Header />
      <main>
        <CsvDownload 
          parcelLists={props.parcelLists}
          filters={filters}
          updateData={updateData}
          setParcelList={setParcelList}
          addFilter={addFilter}
          updateFilter={updateFilter}
          deleteFilter={deleteFilter}
          updateConjunction = {updateConjunction}
          conjunction = {filters.conjunction}
        />
        <Table
          filters = {filters}
          lines = {filteredData}
        />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://parcel-parse.herokuapp.com/api/list-names', {headers: {Authorization: 'ZunderBunder2558'}});
  const data = await res.json();

  return { props: { parcelLists: data }}
}

export default Home
