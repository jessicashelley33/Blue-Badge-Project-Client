import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Register from './UserLogin/Register'
import Login from './UserLogin/Login'
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                     <Route path="/" exact component={()=> <LandingPage {...this.props}/>} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}
