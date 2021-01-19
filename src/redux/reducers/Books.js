const initialState = {
  books: [],
};

const booksReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BOOK': {
      return {
        ...state,
        books: action.books,
      };
    }
    default:
      return state;
  }
};
export default booksReducers;
