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

// async function processData(array, filter) {
//   const index = 0;
//   const subsetSize = 200;
//   const processedData = {
//     newData: [],
//     inverse: []
//   }

//   function processChunk() {
//     console.log(index)
//     const dataSubset = array.slice(index, subsetSize);
//     const filteredChunk = operators(dataSubset, filter, filter.logic);
//     processedData.newData = processedData.newData.concat(filteredChunk.newData);
//     processedData.inverse = processedData.inverse.concat(filteredChunk.inverse);
//     index+=200

//     if (index < array.length) {
//       // TODO: this doesnt work at the moment.
//       // setTimeout adds this to the event loop, which is good, but then we can't wait for the return
//       // instead, we need to add things to the event loop at a higher level and then write their results directly to state
//       // We can potentially do this from the handler functions in the component... but we need the whole array for context so this sucks
//       // Maybe we add this looping functionality to the filterHandler() function. Call baby chunks of data as we go
//       setTimeout(processChunk);
//     }

//     return new Promise(resolve => {
//       resolve()
//     })
//   }

//   await processChunk();
//   console.log('chunks done')
//   return new Promise((resolve) => {
//     resolve(processedData)
//   })
// }

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

    // TODO: update this for the new changes
    const newFilters = filters;
    newFilters.conjunction = target.value;
    setFilters(newFilters);

    filterHandler(data, newFilters).then(filteredData => {
      setFilteredData(filteredData);
    }).catch(err => {
      console.log(err)
    })
    console.log('outside')

  }

  const deleteFilter = (i) => {
    const newFilters = filters;
    newFilters.conditions.splice(i, 1);
    setFilters(newFilters);

    filterHandler(data, newFilters).then(filteredData => {
      console.log('running in then')
      setFilteredData(filteredData);
    }).catch(err => {
      console.log(err)
    })
    console.log('outside');
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
