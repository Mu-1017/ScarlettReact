import React from 'react';
import './Profile.css';

function Profile() {
   return (
    <div id="profile-div" className="container-fluid">
    <div class="main-row row">
    <div id="image-div" class="col-6 d-none d-md-block">
      <img id="cat" className="img-round img-thumbnail" alt="profile" src={process.env.PUBLIC_URL + '/photo/cat.JPG'}/>
    </div>
    <div className="description  col-sm-12 col-md-6 col-lg-6">
        <p>
          Hey, I am Scarlett, a self-taught developer living in Singapore.
        </p>
        <p>
          I have over 8 years experiences working on enterprise applications 
          including development, infrastructure and production support under Waterfall and Agile environments.
        </p>
        <p>I'm also passionate in creating amazing UI/UX and cool web applications.</p>
        <p>
          I love simplicity, I appreciate structure and order. I stand for quality.
        </p>
        </div>
  </div>
    </div>
  );
}
export default Profile;