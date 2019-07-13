import React from 'react';
import './Profile.css';

function Profile() {
   return (
    <div id="profile-div" className="container-fluid">
    <div class="row">
    <div class="div-1 col-5">
    <img id="cat" className="img-thumbnail" alt="mimi" src={process.env.PUBLIC_URL + 'photo/cat.JPG'}/>
    </div>
    <div className="description col-7">
        <p>I liveadcz caaczxccccccccccccccccccccccccccccccccccccccccccccccccccccccccccZCvvzxcd in China</p>
        <p>I moved to Singapore</p>
        <p>I love cheese corn dog</p>
        <p>I watch japanese Oogui eating show</p>
        <p>AKA Mukbang in Korean</p>
        <p>I am a developer</p>
        <p>I code</p>
        </div>
  </div>
    </div>
  );
}
export default Profile;