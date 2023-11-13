// Navbar.js
import React from 'react';
import './styles/Navbar.css';
import homeIcon from './icons/home_icon.png';

const Navbar = () => {
  return (
    <div className="sidebar">

        <a href="/" className="nav-item">
            <img src={homeIcon} alt="Home_Photo" />
            Home
        </a>

        <a href="/" className="nav-item">
            <img src="./icons/home_icon.png" alt="Home_Photo" />
            Messages
        </a>

        <a href="/" className="nav-item">
            <img src="./icons/home_icon.png" alt="Home_Photo" />
            Profile
        </a>

        <a href="/" className="nav-item">
            <img src="./icons/home_icon.png" alt="Home_Photo" />
            Communities
        </a>

        <a href="/" className="nav-item">
            <img src="./icons/home_icon.png" alt="Home_Photo" />
            Saved
        </a>

        <a href="/" className="nav-item">
            <img src="./icons/home_icon.png" alt="Home_Photo" />
            More
        </a>


        <button className="post-btn">
            Post
        </button>

        <div className="profile-section">
           
        </div>

    </div>
  );
};

export default Navbar;

