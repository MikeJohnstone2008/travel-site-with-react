import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './components/cards/Card';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Tablerow from './components/table/Tablerow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div id="jumbotron" className="jumbotron">
          <Hero />
        </div>
     
        <div className="container-fluid">
          <div className="row">
            <Card country="Aruba" classid="flag1" countrysite="Aruba travel site" />
            <Card country="Chile" classid="flag2" countrysite="Chile travel site" />
            <Card country="Italy" classid="flag3" countrysite="Italy travel site" />
            <Card country="Spain" classid="flag4" countrysite="Spain travel site" />
          </div>
        </div>

        <h2 id="myInfo">Some information about places I would like to visit</h2>

        <div id="statTable">
        <table className="table table-striped table-bordered">
          <thead>
          <tr>
            <th>Destination</th>
            <th>Capital</th>
            <th>Official Language</th>
            <th>Population (approx)</th>
            <th>National Bird</th>
          </tr>
          </thead>
          <tbody>

            <Tablerow country="Aruba" capitol="Orangestad" language="Dutch" population="102,911" nationbird="Aruban Burrowing Owl" />
            <Tablerow country="Chile" capitol="Santiago" language="Spanish" population="17.62 million" nationbird="Andean Condor" />        
            <Tablerow country="Italy" capitol="Rome" language="Italian" population="59.82 million" nationbird="bluebirds" />        
            <Tablerow country="Spain" capitol="Madrid" language="Spanish" population="46.77 milion" nationbird="eagle" />
          </tbody>
        </table>
      </div>

      <nav className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid ">
          <div className="navbar-header">
              <a className="navbar-brand" href="#">Travel is Fun</a>
          </div>
        <Footer />
          
        </div>
      </nav>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
    );
  }
}

export default App;
