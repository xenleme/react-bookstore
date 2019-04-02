import React from 'react';
import { withBookstoreService } from '../hoc';

import './app.css'

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <h1>Hi there!</h1>
};

export default withBookstoreService()(App);