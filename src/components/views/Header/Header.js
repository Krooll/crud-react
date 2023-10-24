import styles from './Header.module.scss';
import { Navbar, Col, Nav } from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg='primary' className={styles.navBar}>
                <Col>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link >More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;