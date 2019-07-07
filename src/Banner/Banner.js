import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div id="banner-div" className="px-0">
      {/* <div className="profile col-md-12 px-0">
          <img className="profile-image img-fluid px-0" id="profile-big" src={process.env.PUBLIC_URL + '/photo/profile2-big.jpg'} alt="profile" />
          <img className="col-md-12 profile-image img-fluid px-0" id="profile-small" src={process.env.PUBLIC_URL + '/photo/profile2-small.jpg'} alt="profile" />
      </div> */}

      <div className="title col-md-6 d-flex justify-content-center">
        <p>Hey, I'm Scarlett</p>
      </div>  
    </div>
  );
}

export default Banner;
