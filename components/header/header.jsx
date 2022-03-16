import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ReactSVG } from 'react-svg';

import styles from './header.module.scss'

function Header(props) {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">ParcelParse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button
                variant='dark'
                className={styles.helpButton}
                onClick={props.handleModalShow}
              >
                <ReactSVG 
                  className={styles.helpIcon}
                  src='question.svg'
                />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
