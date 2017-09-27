import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (

        <div id={this.props.classid} className="col-xs-3 flags">
          <h2>{this.props.country}</h2>
          <p>{this.props.countrysite}</p>
        </div>
      )
  }
};

export default Card;