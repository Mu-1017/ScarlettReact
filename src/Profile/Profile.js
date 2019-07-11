import React from 'react';
import './Profile.css';

import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

function Profile() {
  var tooptip = "Clcik to download résumé";
  return (
    <div id="profile-div" className="profile container d-flex justify-item-between">
      <div className="profile-image col d-none d-sm-block">
        <img src={process.env.PUBLIC_URL + '/photo/profile2.jpg'} class="img-fluid img-thumbnail" alt="..."/>
      </div>
      <div className="tagClound col align-self-center">
        <TagCloud 
          style={{
            fontFamily: 'sans-serif',
            fontSize: 24,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: () => randomColor({
              luminosity: 'light',
              hue: 'blue'
            }),
            padding: 6,
            width: '100%',
            height: '450px'
          }}>
          <div style={{fontSize: 40, fontWeight: 'bold'}}>Singapore</div>
          <div>Software developer</div>
          <div style={{color: 'hotpink'}}>Self-taught</div>
          <div>web designer/developer</div>
          <div style={{color: '#fe8a71'}}>Energetic</div>
          <div>UI/UX Design</div>
          <div>Dog person</div>
          <div style={{color:'#fed766'}}>Creative</div>
          <div style={{color: 'orange'}}>Sense of Humor</div>
          <div style={{fontSize: 20, color:'#6f4e37'}}>Coffee addict</div>
          <div style={{fontSize: 20, opacity:'50'}}>Detective books</div>
        </TagCloud>
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