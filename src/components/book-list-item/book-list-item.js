import React, { Fragment } from 'react';

import './book-list-item.css'

const BooklistItem = ({ book }) => {
  const { title, author } = book;

  return (
    <Fragment>
      <span><b>{ title }</b></span>
      <br/>
      <span>{ author }</span>
    </Fragment>
  );
};

export default BooklistItem;