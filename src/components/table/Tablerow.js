import React, { Component } from 'react';
import './Tablerow.css';

class Tablerow extends Component {
    render() {
    return (
        <tr>
        <td>{this.props.country}</td>    
        <td>{this.props.capitol}</td>
        <td>{this.props.language}</td>
        <td>{this.props.population}</td>
        <td>{this.props.nationbird}</td>
        </tr> 
        )   
    }
};
export default Tablerow;