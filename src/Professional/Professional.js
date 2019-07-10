
import React from 'react';
import './Professional.css';

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Professional() {
    var style = buildStyles({
        textSize: '18px',
        pathColor: `rgba(255, 255, 255)`,
        textColor: 'white',
        //backgroundColor: '#f9caa7',
        backgroundColor:'#f1c27d',
        trailColor: "transparent"
      });
  return (
    <div className="container">
        <div className="d-flex col justify-content-center">
            <CircularProgressbar className="progress" value={80} background="true" backgroundPadding="5" 
            text="C#" strokeWidth={6}
            styles={style}/>
              <CircularProgressbar className="progress" value={70} background="true" backgroundPadding="5" 
            text="WPF" strokeWidth={6}
            styles={style}/>
            <CircularProgressbar className="progress" value={80} background="true" backgroundPadding="5" 
            text=".Net" strokeWidth={6}
            styles={style}/>
        </div>
        <div className="d-flex col justify-content-center">
            <CircularProgressbar className="progress" value={60} background="true" backgroundPadding="5" 
            text="html" strokeWidth={6}
            styles={style}/>
            <CircularProgressbar className="progress" value={60} background="true" backgroundPadding="5" 
            text="css" strokeWidth={6}
            styles={style}/>
            <CircularProgressbar className="progress" value={50} background="true" backgroundPadding="5" 
            text="Javascript" strokeWidth={6}
            styles={style}/>
              <CircularProgressbar className="progress" value={50} background="true" backgroundPadding="5" 
            text="React" strokeWidth={6}
            styles={style}/>
        </div>
    </div>
  );
}

export default Professional;