//config
export const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api';

//selectors
export const getAllCategories = (state) => state.categories;
export const getCategory = ({categories}, category) => categories.find(item => item.category === category)

// actions 
const createActionName = actionName => `app/posts/${actionName}`;
const UPDATE_CATEGORIES = createActionName('UPDATE_CATEGORIES');

// action creators
export const updateCategories = payload => ({ type: UPDATE_CATEGORIES, payload});

export const fetchCategories = () => {
  return (dispatch) => {
      fetch(API_URL + '/categories')
        .then(res => res.json())
        .then(category => {
            dispatch(updateCategories(category));
        })
        .catch((error) => {
            console.error(error);
        })
  };
};

const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
      case UPDATE_CATEGORIES:
        return [...action.payload];
      default:
        return statePart;
    };
  };
  
  export default categoriesReducer;