import React, { Component } from 'react';
import Module from '../Extra/Extra'
import { Menu } from 'antd';



class Head extends Component {
    constructor () {
        super()
        this.state = {
            current: '',
        }
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        this.props.changeModule(e)

    }
    render() {

        const { focus, others ,active} = this.props;
        return (
            <div className="clearfiex">
                <div className="head-navigation">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            {focus}
                        </Menu.Item>
                        {
                            others.map((other, i) =>
                                <Menu.Item key={i}>
                                    {other}
                                </Menu.Item >)
                        }
                        <Module  status={active} />
                    </Menu>
                </div>
            </div>
        );
    }
}
export default Head;