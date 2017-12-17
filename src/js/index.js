/**
 * Created by qitmac0000501 on 2017/12/9.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';



import 'antd/dist/antd.css';

export default class Index extends Component {

    constructor() {
        super(); //调用基本的所有的初始化方法
        this.state = {
            username: "username",
            age: 0
        }

    }

    changeInfo(username) {
        this.setState({
            username: username
        });

        this.refs.submitButton.style.color = 'red';
    }

    handle(event, param) {
        console.info('event', event);
        console.info('param', param);

        this.setState({
            age: param
        });
    }

    render() {
        console.info('index');
        return (
            <div>
                <Header />
                <Body age={11} userName={'121212wewe'}/>
                <div>
                    {this.props.children}
                </div>
                <Footer />

                <p>{this.state.age}</p>
                <input ref="submitButton" value="改变颜色"  type="button" onClick={this.changeInfo.bind(this)}/>
                
            </div>
        );
    }
}

ReactMixin(Index.prototype, MixinLog);

//ReactDOM.render(<Index />, document.getElementById('example'));