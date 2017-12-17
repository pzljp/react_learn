import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pcIndex';
import MobileIndex from './components/mobileIndex';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import {Router, Route, hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';


export default class Root extends Component {
    render() {
        return (
            <div>
                <PCIndex />
            </div>

        );
    }
}

ReactDOM.render(<Root />, document.getElementById('mainContainer'));