import React from 'react';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>your order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>

        <tbody>
          <td>1</td>
          <td>A Modern Introduction to Javascript</td>
          <td>2</td>
          <td>40$</td>
          <td>
            <button className="btn btn-outline-danger">
              <i className="fa fa-trash-o"/>
            </button>
            <button className="btn btn-outline-success">
              <i className="fa fa-plus-circle"/>
            </button>
            <button className="btn btn-outline-warning">
              <i className="fa fa-minus-circle"/>
            </button>
          </td>
        </tbody>
      </table>

      <div className="total">Total: 233$</div>
    </div>
  );
};

export default ShoppingCartTable;