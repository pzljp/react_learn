/**
 * Created by qitmac0000501 on 2017/12/9.
 */
import React, {Component} from 'react';
//let footerCss = require('../../css/footer.css');

class Footer extends Component {

    render() {
        let a = {
            "miniFooter": {
                "backgroundColor": "#333",
                "color": "#fff",
                "paddingLeft": "20px",
                "paddingTop": "3px",
                "paddingBottom": "3px"
            },
            "miniFooter_h1": {
                "fontSize": "18px"
            }
        };



        return (
            <footer style={a.miniFooter}>
                <h1 style={a.miniFooter_h1}>底部</h1>
            </footer>
        )
    }
}

export default Footer;