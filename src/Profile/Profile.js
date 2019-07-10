import React from 'react';
import './Profile.css';

function Profile() {
  var tooptip = "Clcik to download résumé";
  return (
    <div id="profile-div" className="profile container px-0 d-flex">
      <div className="thumbnail d-none d-sm-block">
        <img src={process.env.PUBLIC_URL + '/photo/big-head.jpg'} class="img-fluid img-thumbnail" alt="..."/>
      </div>
      <div className="resume d-flex justify-content-center">
        <div className="icon" title={tooptip}>
            <a className="icon" href={process.env.PUBLIC_URL + '/download/Scarlett_Mu_Tong_Resume.docx'} download>
              <img src={process.env.PUBLIC_URL + '/icon/doc.svg'} alt="doc"></img>
            </a>
        </div>
        <div className="icon" title={tooptip}>
            <a className="icon" href={process.env.PUBLIC_URL + '/download/Scarlett_Mu_Tong_Resume.pdf'} download>
              <img src={process.env.PUBLIC_URL + '/icon/pdf.svg'} alt="pdf"></img>
            </a>
        </div>
      </div>
    </div>
  );
}
export default Profile;