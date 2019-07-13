import React from 'react';
import './Profile.css';

function Profile() {
   return (
    <div id="profile-div" className="container-fluid">
    <div class="main-row row">
    <div id="image-div" class="col-6 d-none d-md-block">
      <img id="cat" className="img-round img-thumbnail" alt="mimi" src={process.env.PUBLIC_URL + 'photo/cat.JPG'}/>
    </div>
    <div className="description  col-sm-12 col-md-6 col-lg-6">
        <p>I liveadcz caaczxcccccccccccccccccccin China</p>
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