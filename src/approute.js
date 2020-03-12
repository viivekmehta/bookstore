import React, { Component } from 'react';
import Cart from './cart';
import Home from './home';
import { Router, Route, browserHistory } from 'react-router';
class AppRoutes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route exact path='/' component={Home} />
                <Route path='/cart' component={Cart} />
            </Router >
        );
    }
}
export default AppRoutes;