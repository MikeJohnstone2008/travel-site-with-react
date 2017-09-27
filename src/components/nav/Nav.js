import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
        <nav id="nav-top" className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">My Travel Site</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Stuff</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
  }
};

export default Nav;