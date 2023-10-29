import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import { Button } from 'react-bootstrap';

const NotFoundPage = () => {
    return(
        <div className={styles.main}>
            <h1>Page not found</h1>
            <h3>Error</h3>
            <Link to={'/'}><Button className={styles.button}>Back to home page</Button></Link>
        </div>
    );
};

export default NotFoundPage;