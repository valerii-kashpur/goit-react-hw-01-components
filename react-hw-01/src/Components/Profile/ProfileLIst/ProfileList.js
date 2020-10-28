import React from "react";
import PropTypes from 'prop-types';

const ProfileList = ({ name, value }) => {
  return (
    <li>
      <span className="label">{name}:</span>
      <span className="quantity"> {value}</span>
    </li>
  );
};

export default ProfileList;

ProfileList.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};