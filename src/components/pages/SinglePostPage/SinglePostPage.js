import { Button, Col, Card, Container, Row, Modal } from 'react-bootstrap';
import styles from './SinglePostPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, removePostRequest } from '../../../redux/postRedux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SinglePostPage = () => {
    const {id} = useParams();
    const postData = useSelector(state => getPostById(state,id));
    const [show, setShow] = useState(false);
    const handleShowWarning = () => setShow(true);
    const handleCloseWarning = () => setShow(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRemovePost = e => {
        e.preventDefault();
        dispatch(removePostRequest(postData));
        navigate('/');
    };

    if(!postData) return <Navigate to="/" />
    return(
        <Container className={styles.container}>
            <Col xs={10} md={8} lg={6}>
                <Row>
                    <Card.Body>
                        <div className={styles.titleSection}>
                            <Card.Title>{postData.title}</Card.Title>
                            <div>
                                <Button variant="outline-primary" className={styles.button}>Edit</Button>
                                <Button variant="outline-danger" className={styles.button} onClick={handleShowWarning}>Delete</Button>
                            </div>
                        </div>
                        <Card.Text className={styles.author}>Author: <span className={styles.text}>{postData.author}</span></Card.Text>
                        <Card.Text className={styles.date}>Published: <span className={styles.text}>{postData.publishedDate}</span></Card.Text>
                        <Card.Text>{postData.content}</Card.Text>
                    </Card.Body>
                </Row>
                <Modal show={show} onHide={handleCloseWarning}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are You sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        This operation will completely remove this post from the app.
                        Are you sure you want to do that?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseWarning}>Cancel</Button>
                        <Button variant="danger" onClick={handleRemovePost}>Remove</Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Container>
        
    );
};

export default SinglePostPage;