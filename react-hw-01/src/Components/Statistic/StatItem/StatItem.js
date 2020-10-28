import React from "react";
import PropTypes from 'prop-types';

function get_random_color2() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

const StatItem = ({label, percentage}) => {
  return (
    <li className="item" style={{backgroundColor:`${get_random_color2()}`}}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

export default StatItem;


StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};