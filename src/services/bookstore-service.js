export default class BookstoreServise {
  data = [
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

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  };
};