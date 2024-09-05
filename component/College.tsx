import React from 'react';
import { CiCircleMore } from "react-icons/ci";

const College = () => {
  return (
    <div className="containerc">
      <h1 className="titlec">Trending Colleges</h1>
      <div className="collegesc">
        <div className="collegec">
          <img src="/card-image.png" alt="Harvard University" />
          <div className="college-infoc">
  <h3>Harvard University</h3>
  <br />
  <div style={{ display: 'flex', alignItems: 'center', gap:  100}}>
    <p>Cambridge, Massachusetts, UK</p>
    <CiCircleMore style={{ fontSize: 40 }} />
  </div>
</div>
        </div>
        <div className="collegec">
          <img src="/card-image (1).png" alt="Stanford University" />
          <div className="college-infoc">
  <h3>Stanford University</h3>
  <br />
  <div style={{ display: 'flex', alignItems: 'center', gap: 180 }}>
    <p>Stanford, California</p>
    <CiCircleMore style={{ fontSize: 40 }} />
  </div>
</div>
        </div>
        <div className="collegec">
          <img src="/card-image (2).png" alt="Nanyang University" />
          <div className="college-infoc">
  <h3>Nanyang University</h3>
  <br />
  <div style={{ display: 'flex', alignItems: 'center', gap: 150 }}>
    <p>Nanyang Ave, Singapura</p>
    <CiCircleMore style={{ fontSize: 40 }} />
  </div>
</div>
        </div>
      </div>
      <button className="load-more">Load more...</button>
      <h2 className="titlec">Our Blogs</h2>
      <div className="blogs">
        <div className="blog">
          <img src="/Event.png" alt="BestSeller Book Bootcamp" />
          <div className="blog-info">
            <div className="free">FREE</div>
            <h3>BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow</h3>
            <p>Saturday, March 18, 9:30PM</p>
            <p>ONLINE EVENT - Attend anywhere</p>
          </div>
        </div>
        <div className="blog">
          <img src="/unsplash_qfWMUXDcN18.png" alt="BestSeller Book Bootcamp" />
          <div className="blog-info">
            <div className="free">FREE</div>
            <h3>BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow</h3>
            <p>Saturday, March 18, 9:30PM</p>
            <p>ONLINE EVENT - Attend anywhere</p>
          </div>
        </div>
        <div className="blog">
          <img src="/unsplash_qfWMUXDcN18.png" alt="BestSeller Book Bootcamp" />
          <div className="blog-info">
            <div className="free">FREE</div>
            <h3>BestSeller Book Bootcamp - write, Market & Publish Your Book - Lucknow</h3>
            <p>Saturday, March 18, 9:30PM</p>
            <p>ONLINE EVENT - Attend anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;