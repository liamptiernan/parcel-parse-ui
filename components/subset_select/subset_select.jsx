import styles from './subset_select.module.scss'

import { ReactSVG } from 'react-svg';
import Select from 'react-select';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function SubsetSelect(props) {
  const options = [
    { value: 'All Properties', label: 'All Properties' },
    { value: 'January Sheriff Sale', label: 'January Sheriff Sale Testing' },
  ];

  return (
    <Stack direction="horizontal" gap={4} className='mb-2 mx-auto'>
      <Select
        className={styles.select}
        classNamePrefix='subset'
        options={options}
        placeholder='Select Subset of Properties'
        onChange={e => props.updateSubset(e.value)}
      />
      <Button
        className={styles.button}
        onClick={props.handleSubmit}
      >
        <ReactSVG 
          src='download.svg'
        />
      </Button>
    </Stack>
  )
}

export default SubsetSelect;
