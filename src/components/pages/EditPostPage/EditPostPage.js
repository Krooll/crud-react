import { useDispatch } from 'react-redux';
import styles from './EditPostPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editPostRequest, getPostById } from '../../../redux/postRedux';
import PostForm from '../../features/PostForm/PostForm';

const EditPostPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const postData = useSelector(state => getPostById(state, id));
    console.log('editPost postdata', postData);
    const handleSubmit = post => {
        dispatch(editPostRequest({ ...post, id }));
        navigate('/')
    };
    return(
        <PostForm action={handleSubmit} actionText="Edit post" actionTitle="Edit post" {...postData}/>
    );
};

export default EditPostPage;