import React from 'react';
import FriendList from './Components/FriendList/FriendList';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistic/Statistics';
import user from './data/Profile.json';
import statistics from './data/Statistics.json';
import friends from './data/friends.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => {
    return (
      <>
      <Profile user={user}/>
      <Statistics statistics={statistics}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
      </>
    );
  };
  
  export default App;