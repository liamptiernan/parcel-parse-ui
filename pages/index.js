import Header from '../components/header/header.jsx';
import CsvDownload from '../components/csv_download/csv_download.jsx';
import Table from '../components/table/item-list';
import styles from '../styles/Home.module.css'
import { useState } from 'react';

const defaultFilter = {
  operator: null,
  field: '',
  logic: 'is',
  value: ''
}

function Home(props) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([defaultFilter]);
  const [parcelList, setParcelList] = useState();

  const addFilter = () => {
    const newFilter = {
      operator: null,
      field: '',
      logic: 'is',
      value: ''
    }

    setFilters(filters.concat(newFilter))
  }

  const updateFilter = (target, field, i) => {
    const newFilters = filters;
    newFilters[i][field] = target.value;
    setFilters(newFilters);
  }

  const deleteFilter = (i) => {
    const newFilters = filters;
    newFilters.splice(i, 1);
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
        />
        <Table 
          lines = {[]}
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
