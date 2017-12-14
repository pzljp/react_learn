/**
 * Created by qitmac0000501 on 2017/12/9.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'


class Header extends Component {


    render() {
        console.info('head');
        return (
            <header>
                <h1>头部</h1>
                <ul>
                    <li><Link to={`/`}>首页</Link></li>
                    <li><Link to={`/detail`}>嵌套的详情页</Link></li>
                    <li><Link to={`/list/122121`}>列表页</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header;