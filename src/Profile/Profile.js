import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div id="profile-div" className="profile px-0">Under Construction
      <div className="resume ">
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
      </div>
    </div>
  );
}
export default Profile;