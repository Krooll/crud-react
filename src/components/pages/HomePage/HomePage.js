import { useDispatch, useSelector } from 'react-redux';
import styles from './HomePage.module.scss';
import { fetchPosts, getAllPost } from '../../../redux/postRedux';
import { Button, Container } from 'react-bootstrap';
import PostCards from '../../features/PostCards/PostCards';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getAllPost);
    console.log('posts', posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    
    return(
        <Container>
            <div className={styles.home}>
                <h2>All posts</h2>
                <Link to={'/post/add'}><Button variant="outline-primary">Add Post</Button></Link>
            </div>
            <Container className={styles.list}>
                {posts.map(post => <PostCards key={post.id} {...post}/>)}
            </Container>
        </Container>
    );
};

export default HomePage;