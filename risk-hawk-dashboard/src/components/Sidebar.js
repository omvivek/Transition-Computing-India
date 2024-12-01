// Sidebar.js
import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheJVkYIUiU86oUtTsHwWf6B1pZCi1NolglG68ZGZT8jwMEZ75PL6IkUyCTkyj2Hi1M3kYpK1qG5staYGsz5seH5NWIwWzuqbkAkFJkJwzQapuF_qd8b38kNn4Z7nlZDAp1dq03qvljQZXBkVocPjW41uVRRugh9b5UyAY42410sGxaCN5PP-wP1uJy/s320/riskhawk-logo%201.png" alt="Risk Hawk Logo" className="logo" />
        </div>
        <ul className="menu">
        <li class="audit-item">
  <i class="fa-solid fa-file"></i>
  <span>Internal Audit</span>
  <i class="fa-solid fa-chevron-right"></i>
</li>

          <li> <i class="fa-solid fa-file-circle-check"></i> UAT Testing</li>
          <li class="audit-item"> <i class="fa-solid fa-link"></i> <span>Intract</span> <i class="fa-solid fa-chevron-right"></i> </li>
          <li> <i class="fa-solid fa-user-group"></i> Queue</li>
          <li> <i class="fa-solid fa-sitemap"></i> Workflow</li>
          <li> <i class="fa-solid fa-user"></i> Admin</li>
          <li> <i class="fa-solid fa-cube"></i> Asset</li>
          <li> <i class="fa-solid fa-user-group"></i> Parent</li>
          <li> <i class="fa-regular fa-circle"></i> Option One</li>
          <li> <i class="fa-regular fa-circle"></i> Option Two</li>
          <li> <i class="fa-solid fa-wrench"></i> All Accessories</li>
          <li class="audit-item"> <i class="fa-solid fa-file"></i> <span>Internal Audit</span>  <i class="fa-solid fa-chevron-right"></i></li>
          <li class="audit-item"> <i class="fa-solid fa-star"></i> <span>Decorating</span> <i class="fa-solid fa-chevron-right"></i></li>
          <li> <i class="fa-solid fa-gift"></i> Presenting</li>
        </ul>
      </div>
    );
  };

export default Sidebar;
