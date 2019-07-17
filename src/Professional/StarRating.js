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
            emptySymbol={<i className="fas fa-medal" style={{color: "#ffe6cc", fontSize: '1.7rem'}}/>}
            fullSymbol={<i className="fas fa-medal" style={{color: "#ffb366", fontSize: '1.7rem'}}/>}
            onClick={this.handleClick}/>
        </div>
      );
    }
  }

  export default ResetRating;
  