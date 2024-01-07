import styles from './PostForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { fetchCategories, getAllCategories } from '../../../redux/categoriesRedux';
import { useEffect } from 'react';

const PostForm = ({ action, actionText, actionTitle, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
    console.log('publishedDate', publishedDate);
    const [category, setCategory] = useState(props.category || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);

    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    console.log('categories', categories);


    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const handlePost = () => {
        setDateError(!publishedDate);
        setContentError(!content);
        setCategoryError(!category);
        if(content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content, category});
        }
    };

    return(
     <Container className={styles.container}>
        <Col xs={10} md={8} lg={8} className={styles.form}>
            <h1 className={styles.title}>{actionTitle}</h1>
            <Form onSubmit={validate(handlePost)}>
                <Col xs={10} md={8} lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control {...register("title", { required: true, minLength: 3, maxLength: 26 })}
                        type="text" placeholder="Title..." value={title} 
                        onChange={(e) => setTitle(e.target.value)}/>
                        {errors.title && <small className="d-block form-text text-danger mt-2">
                        Title must be at least 3 and up to 26 characters long</small>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control {...register("author", { required: true, minLength: 3, maxLength: 26 })}
                        type="text" placeholder="Author name..." value={author} 
                        onChange={(e) => setAuthor(e.target.value)}/>
                        {errors.author && <small className="d-block form-text text-danger mt-2">
                        Author must be at least 3 and up to 26 characters long</small>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Published</Form.Label>
                        <DatePicker selected={new Date(publishedDate)} onChange={(date) => setPublishedDate(date)}/>
                        {dateError && <small className="d-block form-text text-danger mt-2">
                        Content can't be empty</small>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label='select category' 
                        {...register("category", {required: true})}
                        value={category} 
                        onChange={e => setCategory(e.target.value)}>
                        <option>Select category...</option> 
                        {categories.map((category, index) => <option key={index} >{category}</option>)} 
                        </Form.Select>
                    </Form.Group>
                    {categoryError && <small className="d-block form-text text-danger mt-2">Select category</small>}
                </Col>
                <Form.Group className="mb-3">
                    <Form.Label>Short decription</Form.Label>
                    <Form.Control  {...register("description", { required: true, minLength: 30 })}
                    as="textarea" rows={3} value={shortDescription} 
                    placeholder="Leave a short description here..." onChange={(e) => setShortDescription(e.target.value)}/>
                    {errors.description && <small className="d-block form-text text-danger mt-2">
                    Short description must be at least 30 characters long</small>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Decription</Form.Label>
                    <ReactQuill as="textarea" placeholder="Leave a comment here..." rows={5}
                    value={content} onChange={(value) => setContent(value)} />
                    {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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