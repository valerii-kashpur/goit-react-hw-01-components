import React from 'react';
import TransactionItem from './TransactionItem/TransactionItem';
import './TransactionHistory.css'



const TransactionHistory = ({transactions}) => {
    return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
   {transactions.map(transaction=> <TransactionItem key={transaction.id} 
   amount={transaction.amount} 
   currency={transaction.currency} 
   type={transaction.type}
   />)}
  </tbody>
</table>
    );
};

export default TransactionHistory;

