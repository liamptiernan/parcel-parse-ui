import * as options from './filter_options';
import styles from './filter_group.module.scss';
import React, { useRef, useEffect, useState } from 'react';
import uuid from 'react-uuid';

import Button from 'react-bootstrap/Button';
import { ReactSVG } from 'react-svg';
import Select from 'react-select';
import Stack from 'react-bootstrap/Stack'

const firstPrefix = <div className={styles.prefix}>Where</div>

const getCurrentOption = (value, select) => {
  let filteredOptions = options.operatorOptions;
  if (select === 'field') {
    filteredOptions = options.fieldOptions
  } else if (select === 'logic') {
    filteredOptions = options.equalityOptions;
  }

  for (const option of filteredOptions) {
    if (option.value === value) {
      return option
    }
  }
}

const InputComponent = ({ props, e }) => {
  <input
    type='text'
    className={styles.valueInput}
    key={uuid()}
    placeholder='Input Value'
    onChange={e => updateValue(e.target, 'value', props.id)}
    value={props.values.value}
  />
}

function FilterCondition (props) {

  const updateValue = (target, field, id) => {
    props.updateFilter(target, field, id);
  }

  const logicOperator = <Select 
    className={styles.operatorSelect}
    classNamePrefix='operator'
    defaultValue={options.operatorOptions[0]}
    onChange={e => props.updateFilter(e, 'operator', props.id)}
    options={options.operatorOptions}
    value={getCurrentOption(props.values.operator, 'operator')}
  />

  const isFirst = props.id === 0;

  let firstCondition = isFirst ? firstPrefix : logicOperator;
  let rowClass = `${styles.row} ${styles.border}`;
  let subRowClass = '';

  if (isFirst) {
    firstCondition = firstPrefix;
    rowClass = styles.row;
    subRowClass = styles.border;
  }

  return (
    <Stack direction='horizontal' gap={2} className={styles.container}>
      <Stack direction='horizontal' gap={0} className={rowClass}>
        {firstCondition}
        <Stack direction='horizontal' gap={0} className={subRowClass}>
          <Select
            className={styles.fieldSelect}
            classNamePrefix='field'
            placeholder='Field'
            onChange={e => props.updateFilter(e, 'field', props.id)}
            options={options.fieldOptions}
            value={getCurrentOption(props.values.field, 'field')}
          />
          <Select
            className={styles.filterSelect}
            classNamePrefix='equality'
            onChange={e => props.updateFilter(e, 'logic', props.id)}
            options={options.equalityOptions}
            value={getCurrentOption(props.values.logic, 'logic')}
          />
          <input
            type='text'
            className={styles.valueInput}
            id={`value-input-${props.id}`}
            key={uuid()}
            placeholder='Input Value'
            onChange={e => updateValue(e.target, 'value', props.id)}
            value={props.values.value}
          />
        </Stack>
      </Stack>
      <Button
        className={styles.removeButton}
        variant='outline-secondary'
        size='sm'
        onClick={e => props.deleteFilter(props.id)}
      >
        <ReactSVG
          src='x.svg'
          className={styles.removeSvg}
          fill="white"
        />
      </Button>
    </Stack>
  )
}

export default FilterCondition;
