import React from 'react';
import dynamic from "next/dynamic";

const Navbar = () => {
  return (
    <div className= "headern">
      <div className= "logon">
        <span className="event">Event</span>
        <span className="hive">Hive</span>
      </div>
      <div className="buttonsn">
        <button className="buttonn">Login</button>
        <button className= "buttonn" style={{ backgroundColor: '#7848F4' }}>Signup</button>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

