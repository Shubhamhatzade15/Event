'use client';
import React from 'react';
import { FiMapPin } from "react-icons/fi";
import "./EventHero.css";
import dynamic from "next/dynamic";


const EventHero = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="flex-container">
        <div className="top-button">
            <button>Back</button>
          </div>
        <div className="text-container">
            <h1>Dream world wide</h1>
            <h2>in jakarta</h2>
            <h3>IIIT Sonepat</h3>
            
          </div>
          <div className="info-container">
            <div className="date-time">
              <h3>Date & time</h3>
              <p>Saturday, March 18 2023, 9:30 PM</p>
              <button>Add to calendar</button>
            </div>
            <div className="buttons">
              <button>Book now</button>
              <button className='program'>Program promoter</button>
              <p>No Refunds</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(EventHero), {ssr: false})
