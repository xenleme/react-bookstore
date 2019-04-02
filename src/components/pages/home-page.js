import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  const books = [
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
  ];

  return (
    <BookList books={books} />
  );
};

export default HomePage;