import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';

import './book-list.css';

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
  };
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps)(BookList);