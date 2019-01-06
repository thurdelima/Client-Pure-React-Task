import React, { Component } from 'react';
import Menu from './template/menu';
import Routes from './routes';
import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './template/custom.css';


class App extends Component {
  render() {
    return (
      
      <div className='container'>
        <Menu />
        <Routes />
       
      </div>
    );
  }
}

export default App;
