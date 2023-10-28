//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api'

//selectors
export const getAllPost = (state) => state.posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_POSTS =  createActionName('UPDATE_POSTS');

// action creators
export const updatePosts = payload => ({ type: UPDATE_POSTS, payload});

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

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return [...action.payload];
    default:
      return statePart;
  };
};

export default postsReducer;