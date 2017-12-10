/**
 * Created by qitmac0000501 on 2017/12/9.
 */
import React, {Component} from 'react';

class Child extends Component {
    
    render() {
        return (
            <div>
                <p>子页面输入: <input type="text" onChange={(event) => {this.props.handle(event, 2111)}}/></p>
            </div>
        )
    }
}

export default Child;