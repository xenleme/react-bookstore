const initialState = {
  books: [
    {
      id: 1,
      title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke'
    },
    {
      id: 2,
      title: 'Exploring ES6',
      author: 'Axel Rauschmayer'
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };
  
    default:
      return state;
  }
};

export default reducer;