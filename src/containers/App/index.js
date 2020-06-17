import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../Home';
import NotFound from '../../components/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Switch component={NotFound} />
      </div>
    );
  }
}

export default App;