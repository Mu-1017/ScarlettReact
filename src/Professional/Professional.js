
import React from 'react';
import './Professional.css';

import ProgressBar from 'react-bootstrap/ProgressBar'


function Professional() {
  return (
    <div className="col-md-9">
        <ProgressBar label="C#" variant="success" now={80} />
        <ProgressBar label="Wpf" variant="success" now={70} />
        <ProgressBar label="React" variant="warning" now={60} />
        <ProgressBar label="Html & Css" variant="danger" now={70} />
    </div>
  );
}

export default Professional;