
import React from 'react';

import ResetRating from './StarRating';
import './Professional.css';

function Professional() {
  return (
    <div className="main-div">
      <div className="row">
        <div className="skill-col col-sm-12 col-md-6">
          <div className="d-flex justify-content-between">
          <p>c#</p>
          <ResetRating initialRating = {5}/>
          </div>
          <div className="d-flex justify-content-between">
          <p>WPF</p>
          <ResetRating initialRating = {4}/>
          </div>
          <div className="d-flex justify-content-between">
          <p>C++</p>
          <ResetRating initialRating = {3}/>
          </div>
          <div className="d-flex justify-content-between">
          <p>Asp.Net</p>
          <ResetRating initialRating = {3}/>
          </div>
        </div>

        <div className="skill-col col-sm-12 col-md-6">
          <div className="d-flex justify-content-between">
          <p>React</p>
          <ResetRating initialRating = {3}/>
          </div>
          <div className="d-flex justify-content-between">
          <p>Bootstrap</p>
          <ResetRating initialRating = {3}/>
          </div>
          <div className="d-flex justify-content-between">
          <p>HTML</p>
          <ResetRating initialRating = {4}/>
          </div>
          <div className="d-flex justify-content-between">
          <p>CSS</p>
          <ResetRating initialRating = {4}/>
          </div>
        </div>
      </div>

      <hr/>

      <div className="row">
        <div className="skill-col col-sm-12 col-md-6">
          <div className="d-flex justify-content-between">
          <p>Chinese</p>
          <ResetRating initialRating = {5}/>
          </div>
        </div>

        <div className="skill-col col-sm-12 col-md-6">
          <div className="d-flex justify-content-between">
          <p>English</p>
          <ResetRating initialRating = {4}/>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Professional;