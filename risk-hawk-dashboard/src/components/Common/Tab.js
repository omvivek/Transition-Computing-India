import React from 'react';

const Tab = ({ label, active }) => {
  return (
    <div className={`tab ${active ? 'active' : ''}`}>{label}</div>
  );
};

export default Tab;
