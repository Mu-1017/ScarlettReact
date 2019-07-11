import React from 'react';
import './Profile.css';

function Profile() {
  // var tooptip = "Clcik to download résumé";
   return (
    <div id="profile-div" className="profile container-fluid d-flex justify-item-between">

      <div className="image-div col-6 d-none d-sm-block">
      <h2>What is important!</h2>
        <p>I lived in China</p>
        <p>I moved to Singapore</p>
        <p>I love cheese corn dog</p>
        <p>I watch japanese Oogui eating show</p>
        <p>AKA Mukbang in Korean</p>
        <p>I am a developer</p>
        <p>I code</p>
      </div>
      <div className="description col-6 align-self-right">
      <h2>What is not</h2>
        <p>I lived in China</p>
        <p>I moved to Singapore</p>
        <p>I love cheese corn dog</p>
        <p>I watch japanese Oogui eating show</p>
        <p>AKA Mukbang in Korean</p>
        <p>I am a developer</p>
        <p>I code</p>
        </div>
      {/* <div className="resume d-flex justify-content-center">
        <div className="icon" title={tooptip}>
            <a className="icon" href={process.env.PUBLIC_URL + '/Scarlett_Mu_Tong_Resume.docx'} target='_blank' rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/icon/doc.svg'} alt="Mu Tong Resume doc"></img>
            </a>
        </div>
        <div className="icon" title={tooptip}>
            <a className="icon" href={process.env.PUBLIC_URL + '/Scarlett_Mu_Tong_Resume.pdf'} target='_blank' rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/icon/pdf.svg'} alt="Mu Tong Resume pdf"></img>
            </a>
        </div>
      </div> */}
    </div>
  );
}
export default Profile;