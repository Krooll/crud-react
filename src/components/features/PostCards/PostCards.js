import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './PostCards.module.scss';
import dateFormat from '../../../utils/dateToStr';

const PostCard = props => {
    return(
        <Col xs={12} md={5} lg={4} className={styles.card}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className={styles.author}>Author: <span className={styles.text}>{props.author}</span></Card.Text>
                    <Card.Text className={styles.data}>Published: <span className={styles.text}>
                        {dateFormat(new Date(props.publishedDate))}</span>
                    </Card.Text>
                    <Card.Text className={styles.category}>Category: <span className={styles.text}>{props.category}</span></Card.Text>
                    <Card.Text>{props.shortDescription}</Card.Text>
                    <Link to={'/post/' + props.id}><Button>Read more</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PostCard;