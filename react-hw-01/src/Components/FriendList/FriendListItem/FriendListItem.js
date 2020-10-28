import React from "react";
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, isOnline, name }) => {

  return (
    <li className="item">
      <span className="status" style={{backgroundColor: isOnline ? 'green' : `red`}}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};