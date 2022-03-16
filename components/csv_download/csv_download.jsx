import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import styles from './csv_download.module.scss';

import FilterGroup from '../filters/filter_group';
import PageSelect from '../pagination/pagination';
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
          let ele = document.getElementById(target.id);
          if (ele) {
            ele.focus();
            ele.setSelectionRange(currentCursor,currentCursor);
          }
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

  const deleteFilter = (i) => {
    props.deleteFilter(i)
    setCurrentTarget(null)
  }
  return (
    <div className={styles.container}>
      <Stack gap={4} direction='horizontal'>
        <h1 className={styles.header}>Monroe County, PA</h1>
        <SubsetSelect 
          updateParcelList={props.setParcelList}
          handleSubmit={props.updateData}
          parcelLists={props.parcelLists}
          isLoading = {props.dataIsLoading}
        />
        <Accordion className={styles.accordion}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Filters</Accordion.Header>
            <Accordion.Body>
              <FilterGroup
                addFilter={addFilter}
                updateFilter={updateFilter}
                deleteFilter={deleteFilter}
                filters={props.filters}
                conjunction = {props.conjunction}
                updateConjunction = {props.updateConjunction}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      {props.pageCount > 1 && <PageSelect
        currentPage = {props.currentPage}
        setCurrentPage = {props.setCurrentPage}
        pageCount = {props.pageCount}
      />}
      </Stack>
    </div>
  )
}

export default CsvDownload;
