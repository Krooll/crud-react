import shortid from "shortid";

//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api'

//selectors
export const getAllPost = (state) => state.posts;
export const getPostById = ({posts}, id) => posts.find(post => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_POSTS =  createActionName('UPDATE_POSTS');
const REMOVE_POST = createActionName('REMOVE_POST');  
const ADD_POST = createActionName('ADD_POST');  

// action creators
export const updatePosts = payload => ({ type: UPDATE_POSTS, payload});
export const removePost = payload => ({ type: REMOVE_POST, payload});
export const addPost = payload => ({ type: ADD_POST, payload});

export const fetchPosts = () => {
  return (dispatch) => {
      fetch(API_URL + '/posts')
        .then(res => res.json())
        .then(posts => {
            dispatch(updatePosts(posts));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};

export const removePostRequest = (postId) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(postId)
    } 
    fetch(API_URL + '/posts/' + postId.id , options)
            .then(() => dispatch(removePost(postId)))
  }
};

export const addPostRequest = (postData) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    } 
    fetch(API_URL + '/posts/', options)
            .then(() => dispatch(addPost(postData)))
  }
};

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return [...action.payload];
    case REMOVE_POST: 
      return statePart.filter(item => item.id !== action.payload);
    case ADD_POST: 
      return [...statePart, {...action.payload, id: shortid()}]
    default:
      return statePart;
  };
};

export default postsReducer;