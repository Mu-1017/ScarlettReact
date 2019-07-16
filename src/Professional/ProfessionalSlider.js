
import React from 'react';

import Rating from 'react-rating';
import './Professional.css';

function ProfessionalSlider() {
  return (
    <div className="container-fluid">
        <div className="d-flex col justify-content-center">

        </div>
        <div className="d-flex col justify-content-center">
        <Rating
          quiet="false"
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
        />
        <Rating
        
  emptySymbol={['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x']}
  fullSymbol={['fa fa-star fa-2x', 'fa fa-heart fa-2x']}
  initialRating = {3}
  onClick={(rate)=> rate = 3}
/>
        <i class="fas fa-splotch"></i>
        </div>
    </div>
  );
}

export default ProfessionalSlider;