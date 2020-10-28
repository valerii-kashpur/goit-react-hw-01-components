import React from "react";
import StatItem from "./StatItem/StatItem";   
import './Statistics.css';

const Statistics = ({ statistics }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statistics.map(elem => <StatItem key={elem.id} 
        label={elem.label} 
        percentage={elem.percentage} 
        />)}
        </ul>
    </section>
  );
};

export default Statistics;
