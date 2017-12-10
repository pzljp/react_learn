/**
 * Created by qitmac0000501 on 2017/12/10.
 */
let MixinLog  = {

    componentWillMount() {
        console.log('MixinLogcomponentWillMount');
    },

    componentDidMount() {
        console.log('MixinLogcomponentDidMount');
    },

    log() {
       console.log('MixinLogMixinLogMixinLogMixinLogMixinLog');
    },
    log2() {
        console.log('222');
    }

};

export default MixinLog