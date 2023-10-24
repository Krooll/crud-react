import { useSelector } from 'react-redux';
import styles from './HomePage.module.scss';
import { getAllPost } from '../../../redux/postRedux';
import { Button, Container } from 'react-bootstrap';
import PostCard from '../../features/PostCard/PostCard';

const HomePage = () => {
    const posts = useSelector(getAllPost);
    
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