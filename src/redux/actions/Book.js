import Axios from 'axios';
import Toast from 'react-native-simple-toast';
import URL from '../../Utils/constant/ConstURL';
import {AsyncStorage} from 'react-native';

export const getUserBooks = (userId) => {
  return function (dispatch) {
    return Axios.post(URL.SERVER + ':5035/books/getUserBooks', {
      userId: userId,
    })
      .then((response) => {
        dispatch({
          type: 'GET_USER_BOOK',
          books: response.data.books,
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};

export const addBookToUser = (bookId, userId) => {
  return async function (dispatch) {
    Axios.post(URL.SERVER + ':5035/books/addBookToUser', {bookId, userId}).then(
      (response) => {
        console.log('added', response);
        dispatch(getUserBooks(userId));
      },
    );
  };
};

export const loadHomeBook = (page = 1) => {
  return function (dispatch) {
    return Axios.get(URL.SERVER + ':5035/books/getAllBook/' + page)
      .then((response) => {
        dispatch({
          type: 'LOAD_HOME_BOOKS',
          homeBooks: response.data.books,
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};
