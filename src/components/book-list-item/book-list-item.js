import React, { Fragment } from 'react';

import './book-list-item.css'

const BooklistItem = ({ book }) => {
  const { title, author, price, coverImage } = book;

  return (
    <div className="book-list-item">
      <div className="book-list-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="book-list-details">
        <a href="#" className="book-title"><b>{ title }</b></a>
        <div className="book-author">{ author }</div>
        <div className="book-price">${ price }</div>
        <button className="btn btn-info add-to-cart">add to cart</button>
      </div>
    </div>
  );
};

export default BooklistItem;