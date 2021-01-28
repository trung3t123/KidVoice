import Axios from 'axios';
import URL from '../../Utils/constant/ConstURL';

const initialState = {
  books: [], //default user's books
  appBooks: [],
  homeBooks: [],
  downloadedBooks: [],
};

const booksReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BOOK': {
      return {
        ...state,
        books: action.books,
      };
    }
    case 'LOAD_HOME_BOOKS': {
      return {
        ...state,
        homeBooks: action.homeBooks,
      };
    }
    default:
      return state;
  }
};
export default booksReducers;
