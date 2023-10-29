import { Container, Col } from 'react-bootstrap';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    return(
        <Container className={styles.container}>
            <Col xs={10} md={10} lg={5} className={styles.about}>
                <h1>About</h1>
                <p>Simple crud app.</p>
                <p>App use API server.</p>
                <p>You can add, edit or remove post from app.</p>
            </Col>
        </Container>
    );
};

export default AboutPage;