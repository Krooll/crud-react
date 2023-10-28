import { useDispatch, useSelector } from 'react-redux';
import styles from './HomePage.module.scss';
import { fetchPosts, getAllPost } from '../../../redux/postRedux';
import { Button, Container } from 'react-bootstrap';
import PostCard from '../../features/PostCard/PostCard';
import { useEffect } from 'react';

const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getAllPost);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    
    return(
        <Container>
            <div className={styles.home}>
                <h2>All posts</h2>
                <Button variant="outline-primary">Add Post</Button>
            </div>
            <Container className={styles.list}>
                {posts.map(post => <PostCard key={post.id} {...post}/>)}
            </Container>
        </Container>
    );
};

export default HomePage;