import React, {Component} from 'react';
import {Row, Col, Menu, Icon} from 'antd';
const SubMenu =  Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class PCHeader extends Component {
    constructor(){
        super();
        this.state = {
            current: ["top"]
        }
    }


    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="/src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys = {this.state.current}>
                            <Menu.Item key="top">
                                <Icon type="appstore" /> 头条
                            </Menu.Item>
                            <Menu.Item type="shehui">
                                <Icon type="appstore" /> 社会
                            </Menu.Item>
                            <Menu.Item type="guonei">
                                <Icon type="appstore" /> 国内
                            </Menu.Item>
                            <Menu.Item type="guoji">
                                <Icon type="appstore" /> 国际
                            </Menu.Item>
                            <Menu.Item type="yule">
                                <Icon type="appstore" /> 娱乐
                            </Menu.Item>
                            <Menu.Item type="tiyu">
                                <Icon type="appstore" /> 体育
                            </Menu.Item>
                            <Menu.Item type="keji">
                                <Icon type="appstore" /> 科技
                            </Menu.Item>
                            <Menu.Item type="shishang">
                                <Icon type="appstore" /> 时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}