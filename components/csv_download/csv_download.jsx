import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import styles from './csv_download.module.scss';

import FilterGroup from '../filters/filter_group';
import SubsetSelect from '../subset_select/subset_select';

const defaultFilter = {
  operator: null,
  field: '',
  logic: 'is',
  value: ''
}

const defaultEndpoint = 'http://localhost:5000'

async function fetchCsv() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

function CsvDownload() {
  const [filters, setFilters] = useState([defaultFilter]);
  const [subset, setSubset] = useState();
  const [currentTarget, setCurrentTarget] = useState();

  useEffect(() => {
    if (currentTarget) {
      const { target, currentCursor } = currentTarget;
      if (target.id && target.id.includes('value-input-')) {
        let ele = document.getElementById(target.id)
        ele.focus()
        ele.setSelectionRange(currentCursor,currentCursor);
      }
    }
  })

  const updateSubset = value => {
    setSubset(value);
    console.log(subset)
  }

  const handleSubmit = async () => {
    const payload = {
      subset,
      filters
    }
    console.log(await fetchCsv());
  }

  const addFilter = () =>  {
    const newFilter = {
      operator: null,
      field: '',
      logic: 'is',
      value: ''
    }

    setFilters(filters.concat(newFilter));
  }

  const updateFilter = (target, field, i) => {
    const newFilters = filters;

    newFilters[i][field] = target.value;
    setFilters(newFilters);

    const currentCursor = target.selectionStart;
    setCurrentTarget({ target, currentCursor });
  }

  const deleteFilter = (i) => {
    const newFilters = filters;
    newFilters.splice(i, 1);
    setFilters(newFilters);
  }

  return (
    <div className={styles.container}>
      <Stack gap={2} className="col-md-5 mx-auto">
        <div className={styles.header}>
          <h1 className='mx-auto'>Download Spreadsheet</h1>
          <p className='mx-auto'>Download a spreadsheet of property data</p>
        </div>
        <Stack gap={3} className="mx-auto">
          <SubsetSelect 
            updateSubset={updateSubset}
            handleSubmit={handleSubmit}
          />
          <Accordion className={styles.accordion}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Filters</Accordion.Header>
              <Accordion.Body>
                <FilterGroup
                  addFilter={addFilter}
                  updateFilter={updateFilter}
                  deleteFilter={deleteFilter}
                  filters={filters}
                  filterCount={filters.length}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </Stack>
    </div>
  )
}

export default CsvDownload;
