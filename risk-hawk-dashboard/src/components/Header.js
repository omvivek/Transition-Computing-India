import React from "react";
import "../styles/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Chat / Feed Chat</h1>
      <div className="header-controls">
        <i className="fa-solid fa-house"></i>
        <button className="for-poh">Process Owner HOD</button>
        <button className="for-admin">Admin</button>
        <p>Palak Bansal</p>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtyV5XKjQVeXw6qgBNvpRTXMjf3uX7KF2TX3oE-RTSCoebxHSQW5SnkPvkLiPNl1Ef0zvmRqgF6Fo-BNVw-JTm0ecMrvOt_RQekDszPAMaSXbTrDOROLChCaGJLMDLFt4F58m3SMqQ9MEfTHHJl9rOA5KjRI4e7uGCXEKONdpseKZelSrXWkHSHwQx/s320/Ellipse%203855.png"
          alt="Profile"
          className="profile-pic"
        />
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <p className="logout">Logout</p>
      </div>
    </div>
  );
};

export default Header;
