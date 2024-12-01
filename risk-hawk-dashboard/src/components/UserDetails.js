// UserDetails.js
import React from "react";
import "../styles/UserDetails.css";

const UserDetails = () => {
    return (
      <div className="user-details">
        <div className="user-info">
  <div className="div-for">CB</div>
  <div className="user-details">
    <h2>Hannibal Smith</h2>
    <div className="location">
      <i className="fa-solid fa-location-dot"></i>
      <p>1 Market Street San Francisco, CA 94105</p>
    </div>
  </div>
</div>

<div className="user-metrics">
  <div className="metric">
    <div className="metric-details">
      <p className="label">Customer ID</p>
      <p className="value">12345</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <div className="metric">
    <div className="metric-details">
      <p className="label">Email Address</p>
      <p className="value">rachel@sample.com</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <div className="metric">
    <div className="metric-details">
      <p className="label">Phone Number</p>
      <p className="value">8051298905</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <button className="add-button">
    <i className="fa-solid fa-plus"></i> Add
  </button>
</div>
<div className="user-metrics">
  <div className="metric">
    <div className="metric-details">
      <p className="label">Loyalty Tier</p>
      <p className="value">Silver</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <div className="metric">
    <div className="metric-details">
      <p className="label">Segment</p>
      <p className="value">Sleepy Customer</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  
  <button className="add-button">
    <i className="fa-solid fa-plus"></i> Add
  </button>
</div>
<div className="user-metrics">
  <div className="metric">
    <div className="metric-details">
      <p className="label">Lifetime Value</p>
      <p className="value">$ 1M</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <div className="metric">
    <div className="metric-details">
      <p className="label">Propensity to Purchase</p>
      <p className="value">75%</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <button className="add-button">
    <i className="fa-solid fa-plus"></i> Add
  </button>
</div>
<div className="user-metrics">
  <div className="metric">
    <div className="metric-details">
      <p className="label">Engagement Score</p>
      <p className="value">80%</p>
    </div>
    <i className="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <button className="add-button">
    <i className="fa-solid fa-plus"></i> Add
  </button>
</div>
      </div>
    );
  };

export default UserDetails;
