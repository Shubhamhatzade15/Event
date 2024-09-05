import React from 'react';
import dynamic from "next/dynamic";

const Footer = () => {
  return (
    <div className="containerf">
      <div className="headerf">
        <h1>Event Hive</h1>
        <div className="subscribef">
          <input type="email" placeholder="Enter your mail" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="Event">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Get in touch</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="footer">
        <div className="language">
          <button>English</button>
          <button>French</button>
          <button>Hindi</button>
        </div>
        <div className="social">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </div>
        <div className="copyright">
          <p>Non Copyrighted © 2023 Upload by EventHive</p>
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Footer), {ssr: false})
