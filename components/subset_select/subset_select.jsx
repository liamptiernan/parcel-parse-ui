import styles from './subset_select.module.scss'

import { ReactSVG } from 'react-svg';
import Select from 'react-select';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


function buildOptions(parcelLists) {
  const options = [];

  for (const list of parcelLists) {
    const option = {
      value: list.title,
      label: list.title
    }

    options.push(option);
  }

  return options;
}

function SubsetSelect(props) {
  const options = buildOptions(props.parcelLists);

  return (
    <Stack direction="horizontal" gap={1} className='m-auto'>
      <Select
        className={styles.select}
        classNamePrefix='subset'
        options={options}
        placeholder='Select Subset of Parcels'
        onChange={e => props.updateParcelList(e.value)}
      />
      <Button
        className={styles.button}
        onClick={props.handleSubmit}
      >
        <ReactSVG 
        className={styles.updateSvg}
          src='arrow-clockwise.svg'
        />
      </Button>
    </Stack>
  )
}

export default SubsetSelect;
