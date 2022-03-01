import CsvDownload from '../components/csv_download/csv_download.jsx';
import Header from '../components/header/header.jsx';
import Table from '../components/table/item-list';

import operators from '../utils/operators';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

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
   * data.filter(parcel => parcel.{filter.field} === {filter.value})
   * 
   * operator - how are we combining these things - this changes the method for concat data
   * equality - how are we comparing these things - this changes the comparison in the function
   * field - what are we looking at
   * value - what should it equal
   * 
   * if conjunction is and
   * pass the filtered list through iteratively
   * 
   * if or
   * additively
   * 
   */

  const workingData = data;
  let filteredData = filters.conjunction === 'and' ? data : [];
  for (const filter of filters.conditions) {
    if (filter.field && filter.logic) {
      if (filters.conjunction === 'and') {
        const currentFilter = operators(filteredData, filter, filter.logic)
        filteredData = currentFilter.newData;
      } else {
        //TODO : 'or' conjunciton isnt working
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
    const newFilters = filters;
    newFilters.conditions[i][field] = target.value;

    if (field === 'field') {
      newFilters.conditions[i]['logic'] = null;
      newFilters.conditions[i]['value'] = '';
    }

    const filteredData = filterData(data, newFilters);

    setFilteredData(filteredData);
    setFilters(newFilters);
  }

  const updateConjunction = (target) => {
    const newFilters = filters;
    newFilters.conjunction = target.value;
    const filteredData = filterData(data, newFilters);

    setFilteredData(filteredData);
    setFilters(newFilters);

  }

  const deleteFilter = (i) => {
    const newFilters = filters;
    newFilters.conditions.splice(i, 1);

    const filteredData = filterData(data, newFilters);

    setFilteredData(filteredData);
    setFilters(newFilters);
  }

  const updateData = async () => {
    let offset = 0;
    const completeRes = [];
    while (true) {
      const res = await fetch(`https://parcel-parse.herokuapp.com/api/list?listName=${parcelList}&pageSize=500&offset=${offset}`, {headers: {Authorization: 'ZunderBunder2558'}})  
      const json = await res.json();
      console.log(json)

      if (json.length === 0) {
        break;
      }
      completeRes = completeRes.concat(json)
      offset = offset + 500;
    }
    console.log('complete')
    setData(completeRes);
    setFilteredData(completeRes);
    console.log(data)
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
