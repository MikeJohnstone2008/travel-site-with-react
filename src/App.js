import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Cards from './components/cards/Cards';
// import Footer from './components/footer/Footer';
// import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
// import Table from './components/table/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
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
