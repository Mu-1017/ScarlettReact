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
        <p>
          I am Scarlett, a self-taught developer living in Singapore.
        </p>
        <p>
          I have over 8 years experience in software design and development.
        </p>
        <p>
          I appreciate simplicity, structure and order.
        </p>
        <p>And I also stand for quality.</p>
        </div>
  </div>
    </div>
  );
}
export default Profile;