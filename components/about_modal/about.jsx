import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';

import selectPic from '../../public/select.png';
import filterPic from '../../public/filter.png';
import pagePic from '../../public/pages.png';


function AboutModal(props) {
  return (
    <div>
      <Modal show={props.modalShow} onHide={props.handleModalClose} >
        <Modal.Header closeButton>
          <Modal.Title>About ParcelParse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='lead border-bottom pb-3'>
            ParcelParse allows for the analysis of specific subsets of Monroe County property data.
          </p>
          <h5 className='mb-3'>How to Use:</h5>
          <Image src={selectPic} alt='Select Dropdown' width={244} height={32}/>
          <p className='mt-3 mb-5'>Select a set of parcels to view. Lists are comprised of current county sales.</p>
          <Image src={filterPic} alt='Filters' />
          <p class='mt-3 mb-5'>Use the filters to view specifc properties.</p>
          <Image src={pagePic} alt='Page Selector' width={244} height={32}/>
          <p class='mt-4'>200 results are displayed per page.</p>
          <p class="border-top pt-3 mt-4"><i>No warranties are made to the accuracy or completeness of this data.</i></p>
          <p><i><a href="https://github.com/liamptiernan" target="_blank" rel="noopener noreferrer">
            Developed by Liam Tiernan
          </a></i></p>

        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AboutModal;