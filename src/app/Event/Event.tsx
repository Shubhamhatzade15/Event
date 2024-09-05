'use client';
import React from 'react';
import { useState, useEffect } from 'react'
import "./Event.css";
import dynamic from "next/dynamic";

const Event = () => {
  
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card">
        <h2 className="Titlee">Description</h2>
        <p className="para">
          DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
        </p>
        <p className="para">
          DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
        </p>
        <h2 className="Titlee">Hours</h2>
        <p className="para">Weekdays hour: <span className="time">7PM - 10PM</span></p>
        <p className="para">Sunday hour: <span className="time">7PM - 10PM</span></p>
        <h2 className="Titlee">Organizer Contact</h2>
        <p className="text-muted-foreground">
          Please go to <a href="https://www.sneakypeeks.com" className="text-primary hover:underline">www.sneakypeeks.com</a> and refer to the FAQ section for more detail.
        </p>
        
      </div>
      <div className="card">
        <h2 className="Titlee">Event location</h2>
        <img aria-hidden="true" alt="Map of event location" src="/map 1.png" className="mb-4 rounded-lg" />
        <p className="para">Dream world wide in Jakarta. Dummy location generation model by RSU ... Our approach generates more realistic dummy locations.</p>
        <h1>Tags</h1>
            <div className="tags">
              <div className="tag">Indonesia event</div>
              <div className="tag">Jaskaran event</div>
              <div className="tag">UI</div>
              <div className="tag">Jaskaran event</div>
              <div className="tag">Seminar</div>
              <div className="tag">Jaskaran event</div>
            </div>
        <h2 className="Titlee">Share with friends</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-primary hover:underline">Facebook</a>
          <a href="#" className="text-primary hover:underline">WhatsApp</a>
          <a href="#" className="text-primary hover:underline">LinkedIn</a>
        </div>
      </div>
      
    </div>
  );
};

export default dynamic (() => Promise.resolve(Event), {ssr: false})
