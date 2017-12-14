import React, { Component } from 'react';
import './style.css'
import { Button } from 'antd';


class Navigation extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleAddItem () {
        this.props.handleAdd()

    }
    handleSearchItem () {
        this.props.handleSearch()
    }
    handleCreateItem () {
        this.props.handleCreate()
    }

    render() {
        const { lines} = this.props;
        return (
            <div className="navigation-message">
                首页
                {
                    lines.map((line, i) => <span key={i}> > {line} </span>)
                }

                {
                    (this.props.ebutton? this.props.ebutton.export : '') === 'export'
                        ?   <div className="export_button">
                                <button className="exportButton">导出</button>
                            </div>
                        : ''
                }

                {
                    (this.props.ebutton? this.props.ebutton.excle: '') === 'excle'
                        ? <div className="export_button">
                            <button className="exportButton">导出Excle</button>
                        </div>
                        : ''
                }

                {
                    (this.props.ebutton?this.props.ebutton.add:'') === 'add'
                        ?   <div className="export_button">
                                <button className="exportButton" onClick={this.handleSearchItem.bind(this)}>查找</button>
                            </div>
                        : ''
                }

                {
                    (this.props.ebutton?this.props.ebutton.search:'') === 'search'
                        ?   <div className="export_button">
                                <button className="exportButton" onClick={this.handleAddItem.bind(this)}>新增</button>
                            </div>
                        : ''
                }
                {
                    (this.props.ebutton?this.props.ebutton.create:'') === 'create'
                        ?   <div className="export_button">
                            <button className="exportButton" onClick={this.handleCreateItem.bind(this)}>创建</button>
                        </div>
                        : ''
                }






            </div>
        );
    }
}

export default Navigation;