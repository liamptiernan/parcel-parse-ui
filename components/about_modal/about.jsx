import Modal from 'react-bootstrap/Modal';

function AboutModal(props) {
  return (
    <div>
      <Modal show={props.modalShow} onHide={props.handleModalClose} >
        <Modal.Header closeButton>
          <Modal.Title>About ParcelParse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ParcelParse allows for the analysis of specific subsets of Monroe County property data.
          </p>
          <h4>How to Use:</h4>
          <p>Select a set of parcels to view. Current county sales are compiled into lists.</p>
          <p>Use the filters to view specifc properites.</p>
          <p>No warranties are made to the accuracy or completeness of this data.</p>
          <p><i><a href="https://github.com/liamptiernan" target="_blank" rel="noopener noreferrer">
            Developed by Liam Tiernan
          </a></i></p>

        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AboutModal;