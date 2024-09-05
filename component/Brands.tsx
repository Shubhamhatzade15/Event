import React from 'react';
import dynamic from "next/dynamic";

const Brands = () => {
  return (
    <div className="containerb">
     <h1 style={{ display: 'inline' }}>Join these </h1>
     <h2 style={{ display: 'inline' }}>brands</h2>
      <p>
        We've had the pleasure of working with industry-defining brands. These are
        just some of them.
      </p>
      <div className="brands">
        <div className="brand">
          <img src="/image 4.png" alt="Spotify" />
        </div>
        <div className="brand">
          <img style={{ height: '49px', width: '162px' }} src="/image 5 (1).png" alt="Google" />
        </div>
        <div className="brand">
          <img style={{ height: '62.95px', width: '141px' }} src="/image 14.png" alt="Stripe" />
        </div>
        <div className="brand"style={{ marginTop: '25px' }}>
          <img style={{ height: '100px', width: '226px' }}src="/image 15.png" alt="YouTube" />
        </div>
        <div className="brand"style={{ marginTop: '25px' }}>
          <img style={{ height: '100px', width: '296.77px' }}src="/image 16.png" alt="Microsoft" />
        </div>
        <div className="brand"style={{ marginTop: '0px' }}>
          <img style={{ height: '90px', width: '350px' }}src="/image 17.png" alt="Medium" />
        </div>
        <div className="brand"style={{ marginTop: '25px' }}>
          <img style={{ height: '38.64px', width: '181.72px' }}src="/image 18.png" alt="Zoom" />
        </div>
        <div className="brand"style={{ marginTop: '25px' }}>
          <img style={{ height: '44.02px', width: '134.13px' }}src="/image 19.png" alt="Uber" />
        </div>
        <div className="brand"style={{ marginTop: '25px' }}>
          <img style={{ height: '52.36px', width: '145.37px' }}src="/image 20.png" alt="Grab" />
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Brands), {ssr: false})
