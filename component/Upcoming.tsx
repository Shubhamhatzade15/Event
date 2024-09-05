import React from 'react';
import dynamic from "next/dynamic";



const events = [

  

  {
    id: 1,
    title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9.30PM',
    imageUrl: '/Event.png',
  },
  {
    id: 2,
    title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9.30PM',
    imageUrl: '/unsplash_qfWMUXDcN18.png',
  },
  {
    id: 3,
    title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9.30PM',
    imageUrl: '/unsplash_qfWMUXDcN18.png',
  },
  {
    id: 4,
    title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9.30PM',
    imageUrl: '/unsplash_qfWMUXDcN18.png',
  },
  {
    id: 5,
    title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9.30PM',
    imageUrl: '/unsplash_1dW1vEJLlCQ.png',
  },
  {
    id: 6,
    title: 'BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow',
    date: 'Saturday, March 18, 9.30PM',
    imageUrl: '/Event.png',
  },
];

interface Event {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}

const EventCard = ({ event }: { event: Event }) => {

  
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} />
      <div className="event-info">
        <p className="event-title">{event.title}</p>
        <br />
        <p className="event-date">{event.date}</p>
        <br />
        <p className="event-location">ONLINE EVENT - Attend anywhere</p>
      </div>
    </div>
  );
};


const Upcoming = () => {
  return (
    <div className="container">
      <h1 className="page-title">Upcoming Events</h1>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <button className="load-more">Load more...</button>
    </div>
  );
};

export default Upcoming;

