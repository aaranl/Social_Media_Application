// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

    <div className="sidebar">

        <a href="/" className="nav-link">Home</a>
        <a href="/messages" className="nav-link">Messages</a>
        <a href="/profile" className="nav-link">Profile</a>
        <a href="/communities" className="nav-link">Communities</a>
        <a href="/saved" className="nav-link">Saved</a>
        <a href="/more" className="nav-link">More</a>


        <button className="post-btn">
            Post
        </button>

        <div class="profile-section">
            <div class="profile-header">

                <div class="profile-picture">

                </div>

                <div class="profile-info">
                    <h2 class="user-name">Aaran</h2>
                    <p class="user-handle">@AaranL</p>
                </div>

            </div>
        </div>
    </div>
    
    

  );
};

export default Navbar;

