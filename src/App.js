import React, { Component } from 'react';
import './App.css';
import NavigationBar from './shared/navbar';
import ApplicationViews from './components/ApplicationVIews';
import { Fragment } from 'react';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <NavigationBar />
        <ApplicationViews />
      </React.Fragment>
    )
  }
}

export default App;
