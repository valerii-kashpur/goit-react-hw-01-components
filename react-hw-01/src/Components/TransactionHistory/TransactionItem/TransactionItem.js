import React from 'react';
import PropTypes from 'prop-types';

const TransactionItem = ({amount, currency, type}) => {
    return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    );
};

export default TransactionItem;

TransactionItem.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  type: PropTypes.string,
};