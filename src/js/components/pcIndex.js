import React, {Component} from 'react';
import PCHeader from './pcHeader';
import PCFooter from './pcFooter';


export default class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCFooter></PCFooter>
            </div>
        );
    }
}