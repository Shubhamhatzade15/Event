import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div 
      className="containerh" 
      style={{
        backgroundImage: `url('/unsplash_F2KRf_QfCqw.png')`,
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <div className="hero">
        <div className="hero-content">
          <h1>MADE FOR THOSE</h1>
          <h1>WHO DO</h1>
        </div>
        
      </div>
      <div className="search-form">
        <div className="search-form-group">
          <label htmlFor="event-type">Looking for</label>
          <select id="event-type">
            <option value="">Choose event type</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="webinar">Webinar</option>
          </select>
        </div>
        <div className="search-form-group">
          <label htmlFor="location">Location</label>
          <select id="location">
            <option value="">Choose location</option>
            <option value="new-york">New York</option>
            <option value="london">London</option>
            <option value="san-francisco">San Francisco</option>
          </select>
        </div>
        <div className="search-form-group">
          <label htmlFor="date">When</label>
          <input type="date" id="date" />
        </div>
        <button className="search-button">
        <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Hero;