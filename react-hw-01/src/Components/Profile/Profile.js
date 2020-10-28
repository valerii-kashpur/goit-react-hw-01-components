import React from 'react';
import ProfileList from './ProfileLIst/ProfileList';
import PropTypes from 'prop-types';
import './Profile.css';


const Profile = ({user}) => {
    return (
<div className="profile">
  <div className="description">
    <img
      src={user.avatar}
      alt="user avatar"
      className="avatar"
    />
    <p className="name">{user.name}</p>
    <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
      {Object.keys(user.stats).map((prop, index) => <ProfileList key={index} name={prop} value={user.stats[prop]}/>)}
  </ul>
</div>
    );
};

export default Profile;

