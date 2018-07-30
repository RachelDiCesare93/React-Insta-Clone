import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = () => {
    return (  
<div className="search-bar">
      <div className="image">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-section">
      <div className="social">
      <i className="fa fa-compass" />
      </div>
      <div className="social">
      <i className="fa fa-heart" />
      </div>
      <div className="social">
      <i className="fa fa-user-circle" />
    </div>
      </div>
      </div>
    );
};
 
export default SearchBar;