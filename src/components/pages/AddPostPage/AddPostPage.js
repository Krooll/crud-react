import styles from './AddPostPage.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPostRequest } from '../../../redux/postRedux';
import PostForm from '../../features/PostForm/PostForm';

const AddPostPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = post => {
        dispatch(addPostRequest(post));
        navigate('/')
    };
    
    return(
       <PostForm action={handleSubmit} actionText="Add post" actionTitle="Add post" />
    );
};

export default AddPostPage;