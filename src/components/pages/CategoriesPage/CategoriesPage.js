import { Col, Container, Button, Nav } from 'react-bootstrap';
import styles from './CategoriesPage.module.scss';
import { useSelector } from 'react-redux';
import { fetchCategories, getAllCategories } from '../../../redux/categoriesRedux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CategoriesPage = () => {
    const categories = useSelector(getAllCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return(
        <Container>
            <div className={styles.container}>
                <h1>Categories</h1>
                <Col xs={12} md={12} lg={12} className={styles.list}>
                    {categories.map((category,index) =>
                    <Nav.Link as={NavLink} to={'/categories/' + category} key={index}><Button variant='primary' className={styles.button}>
                    <p className={styles.buttonText}>{category}</p></Button></Nav.Link>)}
                </Col>
            </div>
        </Container>
        
    );
};

export default CategoriesPage;