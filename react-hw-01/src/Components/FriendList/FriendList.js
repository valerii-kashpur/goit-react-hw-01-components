import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import './FriendList.css';


const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend=> <FriendListItem key={friend.id} 
            avatar={friend.avatar} 
            isOnline={friend.isOnline} 
            name={friend.name}
            />)}
        </ul>
    );
};

export default FriendList;

