import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import styles from './csv_download.module.scss';

import FilterGroup from '../filters/filter_group';
import SubsetSelect from '../subset_select/subset_select';

function CsvDownload(props) {
  const [currentTarget, setCurrentTarget] = useState();

  useEffect(() => {
    if (currentTarget) {
      if (currentTarget.newFilter) {
        const newEle = document.getElementById(`value-input-${props.filters.conditions.length - 1}`);
        newEle.focus();
      } else {
        const { target, currentCursor } = currentTarget;
        if (target.id && target.id.includes('value-input-')) {
          let ele = document.getElementById(target.id)
          ele.focus();
          ele.setSelectionRange(currentCursor,currentCursor);
        }
      }
    }
  })

  const addFilter = () =>  {
    props.addFilter();
    setCurrentTarget({ newFilter: true });
  }

  const updateFilter = (target, field, i) => {
    props.updateFilter(target, field, i);

    const currentCursor = target.selectionStart;
    setCurrentTarget({ target, currentCursor });
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
            updateParcelList={props.setParcelList}
            handleSubmit={props.updateData}
            parcelLists={props.parcelLists}
          />
          <Accordion className={styles.accordion}>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Filters</Accordion.Header>
              <Accordion.Body>
                <FilterGroup
                  addFilter={addFilter}
                  updateFilter={updateFilter}
                  deleteFilter={props.deleteFilter}
                  filters={props.filters}
                  conjunction = {props.conjunction}
                  updateConjunction = {props.updateConjunction}
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
