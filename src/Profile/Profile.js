import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="banner px-0">
      <div className="profile col-md-12 px-0">
          <img className="profile-image img-fluid px-0" id="profile-big" src={process.env.PUBLIC_URL + '/photo/profile2-big.jpg'} alt="profile" />
          <img className="col-md-12 profile-image img-fluid px-0" id="profile-small" src={process.env.PUBLIC_URL + '/photo/profile2-small.jpg'} alt="profile" />
      </div>

      <div className="title col-md-6 d-flex justify-content-center">
        <p>Hey, I'm Scarlett</p>
      </div>  

      {/* <div className="resume ">
        <div className="icon" title="Resume">
            <a className="icon" href={process.env.PUBLIC_URL + '/download/profile-big.jpg'} download>
              <img src={process.env.PUBLIC_URL + '/icon/doc.svg'} alt="doc"></img>
            </a>
        </div>
        <div className="icon" title="Resume">
            <span className="icon" href={process.env.PUBLIC_URL + '/download/profile-big.jpg'} download>
              <img src={process.env.PUBLIC_URL + '/icon/pdf.svg'} alt="pdf"></img>
            </span>
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
