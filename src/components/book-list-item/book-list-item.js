import React from 'react';

import './book-list-item.css'

const BooklistItem = ({ book }) => {
  const { title, author, price, coverImage } = book;

  return (
    <div className="book-list-item">
      <div className="book-list-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="book-list-details">
        <span className="book-title"><b>{ title }</b></span>
        <div className="book-author">{ author }</div>
        <div className="book-price">${ price }</div>
        <button className="btn btn-info add-to-cart">add to cart</button>
      </div>
    </div>
  );
};

export default BooklistItem;