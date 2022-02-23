import Header from '../components/header/header.jsx';
import CsvDownload from '../components/csv_download/csv_download.jsx';
import Table from '../components/table/item-list';
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://parcel-parse.herokuapp.com/api/parcels?pageSize=1000', {headers: {Authorization: 'ZunderBunder2558'}}).then(res => {
      return res.json();
    }).then(data => console.log(data))
    .catch(err => console.log(err))
    fetch('https://parcel-parse.herokuapp.com/api/parcels?pageSize=1000&offset=2000', {headers: {Authorization: 'ZunderBunder2558'}}).then(res => {
      return res.json();
    }).then(data => console.log(data))
    .catch(err => console.log(err))
  })

  return (
    <div className={styles.container}>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <Header />
      <main>
        <CsvDownload />
        <Table 
          lines = {[]}
        />
      </main>
    </div>
  )
}

/* landing page
 * module to filter parameters
 * download all button
 */
