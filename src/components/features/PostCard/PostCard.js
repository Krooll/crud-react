import { Button, Card, Col } from 'react-bootstrap';
import styles from './PostCard.module.scss';

const PostCard = props => {
    return(
        <Col xs={12} md={5} lg={4} className={styles.card}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className={styles.author}>Author: <span className={styles.text}>{props.author}</span></Card.Text>
                    <Card.Text className={styles.data}>Published: <span className={styles.text}>{props.publishedDate}</span></Card.Text>
                    <Card.Text>description</Card.Text>
                    <Button>Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PostCard;