import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="title">Logo</h1>
      <div>
        <nav className="nav-elements">
          <ol>Home</ol>
          <ol>About Us</ol>
          <ol>Contact Us</ol>
        </nav>
      </div>
    </div>
  );
}
