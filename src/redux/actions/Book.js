import Axios from 'axios';
import Toast from 'react-native-simple-toast';
import URL from '../../Utils/constant/ConstURL';

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
