import { Button, Container } from 'react-bootstrap';
import { addPostRequest } from '../../../redux/postRedux';
import styles from './AddPostPage.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import { useState } from 'react';

const AddPostPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSetTitle = (e) =>{
        const activeTitle = e.target.value;
        setTitle(activeTitle);
    };
    const handleSetAuthor = (e) =>{
        const activeAuthor = e.target.value;
        setAuthor(activeAuthor);
    };
    const handleSetDate = (e) => {
        const activeDate = e.target.value;
        setPublishedDate(activeDate);
    };
    const handleSetShortDescription = (e) => {
        const activeShortDescription = e.target.value;
        setShortDescription(activeShortDescription);
    };
    const handleSetDescription = (e) => {
        const activeDescription = e.target.value;
        setContent(activeDescription);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddPost = e => {
        e.preventDefault();
        dispatch(addPostRequest({title, author, publishedDate, shortDescription, content}));
        navigate('/')
    };
    
    return(
        <Container className={styles.container}>
            <Col xs={10} md={8} lg={8} className={styles.form}>
                <h1 className={styles.title}>Add post</h1>
                <Form>
                    <Col xs={10} md={8} lg={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title..." value={title} onChange={handleSetTitle}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Author name..." value={author} onChange={handleSetAuthor}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Published</Form.Label>
                            <Form.Control type="text" placeholder="Date..." value={publishedDate} onChange={handleSetDate}/>
                        </Form.Group>
                    </Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Short decription</Form.Label>
                        <Form.Control as="textarea" rows={3} value={shortDescription} onChange={handleSetShortDescription}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Decription</Form.Label>
                        <Form.Control as="textarea" rows={6} value={content} onChange={handleSetDescription}/>
                    </Form.Group>
                </Form>
                <div className={styles.buttonSection}>
                    <Button onClick={handleAddPost}>Add post</Button>
                </div>
            </Col>
        </Container>
    );
};

export default AddPostPage;