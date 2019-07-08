import React from 'react';
import './SectionHeader.css';

function SectionHeader(props) {
  return (
    <div id="header-div" className="px-0 d-flex justify-content-center align-items-center">
        <div className="header-content col-xs-6">
            <h1>{props.name}</h1>
            <hr/>
            <p>{props.desc}</p>
        </div>
    </div>
  );
}
export default SectionHeader;