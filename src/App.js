import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Navigation, Home, Schedule, Explore, Splash } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Splash/ >} />
          <Route path="/home" exact component={() => <Home/ >} />
          <Route path="/schedule" exact component={() => <Schedule/ >} />
          <Route path="/explore" exact component={() => <Explore/ >} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
