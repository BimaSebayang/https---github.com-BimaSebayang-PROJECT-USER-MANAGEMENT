import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Simple React App DEV 1</h1>
      </header>
        <Switch>
              <Route exact path= "/" render={() => (
                <Redirect to="/login"/>
              )}/>
        </Switch>
      </div>
  </Router>


    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <div className="App container">
    //   <h1 className="text-danger">React JS</h1>
    //   <button className="btn btn-primary">Submit</button>
    // </div>
    //   </div>
    );
  }
}

export default App;
