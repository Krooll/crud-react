import { useParams } from 'react-router-dom';
import styles from './PostByCategoriesPage.module.scss';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { getPostsByCategory } from '../../../redux/postRedux';
import CategoryCard from '../../features/CategoryCard/CategoryCard';

const PostByCategoriesPage = () => {
    const {category} = useParams();
    const categoryFilter = useSelector(state => getPostsByCategory(state, category));

    if(!categoryFilter.length) {
        return <div className={styles.info}>Nothing here...</div>
    }
    return (
        <Col xs={12} md={12} lg={12} className={styles.list}>
            {categoryFilter.map(filter => <CategoryCard key={filter.id} {...filter} />)}
        </Col>
    );
};

export default PostByCategoriesPage;