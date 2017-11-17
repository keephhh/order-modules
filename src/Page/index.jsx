import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class DefaultApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>正在加载...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            initDone: true
        })
    }
}
export default DefaultApp