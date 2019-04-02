export default class BookstoreServise {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
        price: 25,
        coverImage: 'https://eloquentjavascript.net/img/cover.jpg'
      },
      {
        id: 2,
        title: 'Exploring ES6',
        author: 'Axel Rauschmayer',
        price: 43,
        coverImage: 'http://exploringjs.com/es6/images/cover.jpg'
      }
    ];
  };
};