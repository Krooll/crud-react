import { useDispatch, useSelector } from 'react-redux';
import styles from './HomePage.module.scss';
import { fetchPosts, getAllPost } from '../../../redux/postRedux';
import { Button, Container } from 'react-bootstrap';
import PostCards from '../../features/PostCards/PostCards';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector(getAllPost);
    console.log('loading', loading);

    useEffect(() => {
        dispatch(fetchPosts());
        setLoading(false);
    }, [dispatch]);

    if(loading){
        return(
            <Container>
                <div className={styles.loading}>
                    <h5>Loding list...</h5>
                </div>
            </Container>
        );
    }
    
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