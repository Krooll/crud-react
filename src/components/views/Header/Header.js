import styles from './Header.module.scss';
import { Navbar, Col, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='primary' className='rounded m-4'>
                    <Col xs={5} md={7} lg={9}>
                        <Nav.Link as={NavLink} to="/"><p className={styles.text}>React crud-app</p></Nav.Link>
                    </Col>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Col className={styles.test}>
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/"><p className={styles.text}>Home</p></Nav.Link>
                                <Nav.Link as={NavLink} to="/categories"><p className={styles.text}>Categories</p></Nav.Link>
                                <Nav.Link as={NavLink} to="/about"><p className={styles.text}>About</p></Nav.Link>
                            </Nav>
                        </Col>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;