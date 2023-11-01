import styles from './PostForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Col, Form, Button } from 'react-bootstrap';
import shortid from 'shortid';

const PostForm = ({ action, actionText, actionTitle, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

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
    const handlePost = e => {
        e.preventDefault();
        dispatch(action({id: shortid(), title, author, publishedDate, shortDescription, content}));
    };

    return(
     <Container className={styles.container}>
        <Col xs={10} md={8} lg={8} className={styles.form}>
            <h1 className={styles.title}>{actionTitle}</h1>
            <Form onSubmit={handlePost}>
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
                <div className={styles.buttonSection}>
                    <Button type="submit">{actionText}</Button>
                </div>
            </Form>
        </Col>
      </Container>
    )
};

export default PostForm;