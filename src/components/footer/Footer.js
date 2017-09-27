import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul id="footer" className="nav navbar-nav">
                <li className="footer"><a href="#">Facebook <span className="sr-only">(current)</span></a></li>
                <li className="footer"><a href="#">Twitter</a></li>
            </ul>
        </div> 
    )
  }
};

export default Footer;

