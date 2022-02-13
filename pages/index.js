import Header from '../components/header/header.jsx';
import CsvDownload from '../components/csv_download/csv_download.jsx';
import Table from '../components/table/item-list';
import styles from '../styles/Home.module.css'

// const defaultEndpoint = 'http://localhost:5000'

// export async function getServerSideProps() {
//   const res = await fetch(defaultEndpoint);
//   const data = await res.json();
//   return {
//     props: {
//       data
//     }
//   }
// }

export default function Home({ data }) {
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
