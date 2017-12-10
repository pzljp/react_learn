/**
 * Created by qitmac0000501 on 2017/12/9.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Child from './child';


class Body extends Component {

    constructor() {
        super(); //调用基本的所有的初始化方法
        this.state = {
            age: 10
        }
    }


    

    render() {
        let userName = 'wq&nbspwq';
        console.info('body');

        return (
            <div>
                <h2>页面主体部分</h2>
                <p>
                    <input type="button" value="提交"/>
                </p>
                <h1>
                    {this.props.age} {this.props.userName}
                </h1>
            </div>
        )
    }
}

export default Body;

Body.propTypes = {
    age: PropTypes.number,
    userName: PropTypes.string.isRequired
}

Body.defaultProps = {
    userName: 2121
}


