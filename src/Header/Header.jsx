import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>mAI</h1>
      </div>
      <div className="header-center">
        <button className="header-button">Home</button>
        <button className="header-button">Projects</button>
        <button className="header-button">Search Candidate</button>
        <button className="header-button">Reports</button>
        <button className="header-button">Messages</button>
      </div>
      <div className="header-right">
        <div className="icon-container">
        <div className="toggle-icon">⚙️</div>
          <div className="notification-icon">🔔</div>
          <div className="profile-icon">👤</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
