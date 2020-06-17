import React, { Component } from 'react';
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { authenticate } from '../../actions/session';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import NotFound from '../../components/NotFound';

type Props = {
  authenticate: () => void,
}

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.authenticate();
    }
  }

  props: Props

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Switch component={NotFound} />
      </div>
    );
  }
}

export default withRouter(connect(
  null,
  { authenticate }
)(App));