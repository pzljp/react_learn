import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class List extends Component {
    render() {
        return (
            <div>
                <h2>list页: {this.props.params.id}</h2>
            </div>
        );
    };
}