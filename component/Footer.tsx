import React from 'react';
import dynamic from "next/dynamic";
import { CiLinkedin,CiFacebook,CiInstagram} from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="containerf">
      <div className="headerf">
        <h1>Event <span style={{ color: '#7848F4' }}>Hive</span></h1>
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
      <hr />
      <div className="footer">
        <div className="language">
          <button>English</button>
          <button>French</button>
          <button>Hindi</button>
        </div>
        <div className="social">
        <CiLinkedin />
        <CiInstagram />
        <CiFacebook />
        </div>
        <div className="copyright">
          <p>Non Copyrighted © 2023 Upload by rich technologies</p>
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Footer), {ssr: false})
