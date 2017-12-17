import React, {Component} from 'react';
import PCHeader from './pcHeader';

export default class MobileHeader extends Component {
    render() {
        return (
            <div id="mobileheader">
               <header>
                   <img src="/src/images/logo.png" alt="logo"/>
                   <span>ReactNative</span>
               </header>
            </div>
        );
    }
}