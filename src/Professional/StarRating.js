import React from 'react';
import Rating from 'react-rating';

class ResetRating extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: this.props.initialRating};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({value: this.props.initialRating});
    }
  
    render() {
      return (
        <div>
          <Rating {...this.props}
            emptySymbol='fas fa-medal fa-2x text-white'
            fullSymbol='fas fa-medal fa-2x text-warning'
            onClick={this.handleClick}/>
        </div>
      );
    }
  }

  export default ResetRating;
  