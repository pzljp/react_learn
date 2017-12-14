import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Index from './index';
import List from './components/list';
import Detail from './components/detail';
import {Router, Route, hashHistory} from 'react-router';



export default class Root extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Index} path="/">
                    <Route component={Detail} path="detail">

                    </Route>
                </Route>
                <Route component={List} path="list/:id"></Route>
            </Router>

        );
    }
}

ReactDOM.render(<Root />, document.getElementById('example'));