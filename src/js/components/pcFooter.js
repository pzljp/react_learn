import React, {Component} from 'react';
import {Row, Col, Menu, Icon} from 'antd';


export default class PCFooter extends Component {

    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                        &copy;&nbsp;2016 React Native. All Rights Reserved
                    </Col>
                    <Col span={2}>
                    </Col>
                </Row>
            </footer>
        );
    }
}