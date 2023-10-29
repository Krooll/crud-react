import { addPostRequest } from '../../../redux/postRedux';
import styles from './AddPostPage.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddPostPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddPost = e => {
        e.preventDefault();
        dispatch(addPostRequest());
        navigate('/');
    };
    return(
        <div>
            <h1>AddPostPage</h1>
            <p>Work in progress</p>
            <button onClick={handleAddPost}>dodaj</button>
        </div>
    );
};

export default AddPostPage;