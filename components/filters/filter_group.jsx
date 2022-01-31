import React, { useState } from 'react';
import uuid from 'react-uuid'

import styles from './filter_group.module.scss';
import FilterCondition from './filter_condition';

import Button from 'react-bootstrap/Button';
import { ReactSVG } from 'react-svg';
import Stack from 'react-bootstrap/Stack';

function FilterGroup(props) {
  const [changeCount, setChangeCount] = useState(props.filters.length);

  const deleteFilter = i => {
    props.deleteFilter(i);
    setChangeCount(changeCount + 1);
  }

  const updateFilter = (e, field, i) => {
    props.updateFilter(e, field, i);
    setChangeCount(changeCount + 1);
  }

  return (
    <div className={styles.filterGroup}>
      {props.filters.map((filter, i) => {
        return <FilterCondition
          key={uuid()}
          id={i}
          updateFilter={updateFilter}
          deleteFilter={deleteFilter}
          values={filter}
        />
      })}
      <Button 
        className={styles.addButton}
        variant="outline-secondary"
        size='sm'
        onClick={props.addFilter}
      >
        <Stack direction='horizontal' gap={1}>
          <ReactSVG src='plus.svg' />
          Add condition 
        </Stack>
      </Button>
    </div>
  )
}

export default FilterGroup;
