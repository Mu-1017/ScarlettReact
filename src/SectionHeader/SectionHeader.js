import React from 'react';
import './SectionHeader.css';

import Typing from 'react-typing-animation';

function SectionHeader(props) {
  return (
    <div id="header-div" className="px-0 d-flex justify-content-center align-items-center">
        <div className="header-content col-xs-6">
            <h1>{props.name}</h1>
            <hr className="strongLinebreak"/>
            <Typing loop="true">
                <span>{props.desc}</span>
                <Typing.Reset count={-1} delay={3000} />
            </Typing>
        </div>
    </div>
  );
}
export default SectionHeader;