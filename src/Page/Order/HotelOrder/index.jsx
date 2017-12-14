import React, { Component } from 'react';
import  Head from '../../SmartComponent/Menu/Menu';
import FormHeader from './SubPage/FormHeader';
import SearchRecord from './SubPage/SearchRecord'
import Navigation from '../../../Component/Navigation/Navigation'

import {connect} from 'react-redux'
import {  displayHotel } from '../../../Action/OrderAction';
import {showflag} from "../../../Action/AppAction"

import './index.css';
import { Select, DatePicker, Checkbox, Icon} from 'antd';

const Option = Select.Option;



class Order extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: '',
            isDisplay: true,
            mask: false,
            isAdd1: false,
            isAdd2: false,
            isAdd3: false,
            isAdd4: false,
            isAdd5: false,
            isAdd6: false,
        }
    }

    componentWillMount() {
        localStorage.setItem('topType', 'mail');
        localStorage.setItem('status', 'sale');
        const {dispatch} = this.props;
        displayHotel()(dispatch)
        dispatch(showflag('订单管理'))
    }

    handleCreate () {
        this.setState({
            mask: true,
            isAdd1: true,
        })
    }
    handleChange (value) {
        this.setState({
            value: value
        })
    }
  render() {
      let { list} = this.props;
      const options = ['合作商户','CRM','内容运营','POST管理','财务对账', '系统设置']
      const navigation = ['订单管理','酒店订单','销售订单'];
      const buttonType = {
          export: 'export',
          create: 'create',
      }
      return (
          <div className="order-module">
              {
                  this.state.mask
                      ? <div className="mask-page"> </div>
                      : ''
              }
              {
                  this.state.isAdd1
                      ? <div className="fixed-create">
                            <div className="fixed-create-header">
                                <span>创建新订单</span>
                                <div onClick={() => {
                                    this.setState({
                                        mask: false,
                                        isAdd1: false,
                                    })
                                }}>取消</div>
                            </div>
                            <div className="fixed-create-content">
                                <div className="fixed-create-flex">
                                    <span>供应商：</span>
                                    <Select defaultValue='供应商' style={{ width: 100 }}>
                                        <Option value="供应商1">供应商1</Option>
                                        <Option value="供应商2">供应商2</Option>
                                        <Option value="供应商3">供应商3</Option>
                                    </Select>
                                </div>
                                <div className="fixed-create-flex">
                                    <span>预订酒店：</span>
                                    <div className="fixed-create-flex-item">
                                        <input type="text" placeholder="威尼斯人大酒店"/>
                                    </div>
                                </div>
                                <div className="fixed-create-flex">
                                    <span>入离时间：</span>
                                    <DatePicker size='default' style={{ width: 60 }} />
                                    <div className="date-line"> </div>
                                    <DatePicker size='default' style={{ width: 60 }} />
                                </div>
                            </div>
                            <div className="fixed-create-footer">
                                <div className=""> </div>
                                <div className="fixed-create-button-next" onClick={() => {
                                    this.setState({
                                        isAdd1: false,
                                        isAdd2: true,
                                    })
                                }}>下一步</div>
                            </div>
                        </div>
                      : ''
              }
              {
                  this.state.isAdd2
                  ? <div className="fixed-create">
                          <div className="fixed-create-header">
                              <span>创建新订单</span>
                              <div onClick={() => {
                                  this.setState({
                                      mask: false,
                                      isAdd2: false,
                                  })
                              }}>取消</div>
                          </div>
                         <div className="fixed-create-content">
                             <div className="fixed-create-flex">
                                 <span>供应商：</span>
                                 <label>供应商</label>
                             </div>
                             <div className="fixed-create-flex">
                                 <span>预订酒店：</span>
                                 <label>威尼斯人大酒店</label>
                             </div>
                             <div className="fixed-create-flex">
                                 <span>入离时间：</span>
                                 <label>2017.09.03</label> - <label>2017.09.04</label>
                             </div>
                             <div className="fixed-create-flex">
                                 <span>房间：</span>
                                 <Select defaultValue='双人房' style={{ width: 100 }}>
                                     <Option value="单人大床房">单人大床房</Option>
                                     <Option value="标准双人间">标准双人间</Option>
                                     <Option value="豪华商务房">豪华商务房</Option>
                                 </Select>
                                 <Select defaultValue='10' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                     <Option value="1">1</Option>
                                     <Option value="2">2</Option>
                                     <Option value="3">3</Option>
                                 </Select>
                                 <label>间</label>
                             </div>
                          </div>
                          <div className="fixed-create-footer">
                              <div> </div>
                              <div className="fixed-create-button-next" onClick={() => {
                                  this.setState({
                                      isAdd2: false,
                                      isAdd3: true,
                                  })
                              }}>下一步</div>
                          </div>
                      </div>
                      : ''

              }
              {
                  this.state.isAdd3
                  ? <div className="fixed-create">
                          <div className="fixed-create-header">
                              <span>创建新订单</span>
                              <div onClick={() => {
                                  this.setState({
                                      mask: false,
                                      isAdd3: false,
                                  })
                              }}>取消</div>
                          </div>
                      <div className="fixed-create-content">
                          <div className="fixed-create-flex">
                              <span>供应商：</span>
                              <label>供应商</label>
                          </div>
                          <div className="fixed-create-flex">
                              <span>预订酒店：</span>
                              <label>威尼斯人大酒店</label>
                          </div>
                          <div className="fixed-create-flex">
                              <span>入离时间：</span>
                              <label>2017.09.03</label> - <label>2017.09.04</label>
                          </div>
                          <div className="fixed-create-flex">
                              <span>房间：</span>
                              <label>双人房 × 10 间</label>
                          </div>
                          <div className="fixed-create-flex">
                              <span>用户ID：</span>
                              <div className="fixed-create-flex-item">
                                  <input type="text" placeholder="请输入UID"/>
                              </div>
                          </div>
                          <div className="fixed-create-flex">
                              <span>入住偏好：</span>
                              <Select defaultValue='无要求' style={{ width: 100 }} onChange={this.handleChange.bind(this)}>
                                  <Option value="">无要求</Option>
                                  <Option value="有要求">有要求</Option>
                              </Select>
                          </div>
                          {
                              this.state.value !== ''
                              ? <div className="fixed-create-flex" style={{ marginLeft: 55, fontSize: 12 }}>
                                      <Checkbox >尽量安排高层</Checkbox>
                                      <Checkbox >无烟房</Checkbox>
                                      <Checkbox >房间安静</Checkbox>
                                  </div>
                                  : ''
                          }
                      </div>
                      <div className="fixed-create-footer">
                          <div className="fixed-create-button-last" onClick={() => {
                              this.setState({
                                  isAdd3: false,
                                  isAdd2: true,
                              })
                          }}>上一步</div>
                          <div className="fixed-create-button-next" onClick={() => {
                              this.setState({
                                  isAdd3: false,
                                  isAdd4: true,
                              })
                          }}>下一步</div>
                      </div>
                  </div>
                  : ''
              }
              {
                  this.state.isAdd4
                  ? <div className="fixed-create">
                          <div className="fixed-create-header">
                              <span>创建新订单</span>
                              <div onClick={() => {
                                  this.setState({
                                      mask: false,
                                      isAdd4: false,
                                  })
                              }}>取消</div>
                          </div>
                          <div className="fixed-create-content">
                              <div className="fixed-create-item-line">
                                  <div className="fixed-create-flex">
                                      <span>酒店信息：</span>
                                      <label>威尼斯人大酒店 - 双人房*2间*1晚</label>
                                  </div>
                                  <div className="fixed-create-flex">
                                      <span>入离时间：</span>
                                      <label>2017.09.03</label> - <label>2017.09.04</label>
                                  </div>
                              </div>
                             <div className="fixed-create-people">
                                 <div className="fixed-create-flex">
                                     <span>用户ID：</span>
                                     <label>bkahsugs</label>
                                 </div>
                                 <div className="fixed-create-add-people">
                                     <div className="fixed-create-flex">
                                         <span>房间1：</span>
                                         <div className="fixed-create-flex-item2">
                                             <input type="text" placeholder="姓"/>/<input type="text" placeholder="姓"/>
                                         </div>
                                     </div>
                                     <div className="fixed-create-flex" style={{ marginLeft: 55 }}>
                                         <Select defaultValue='2' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                             <Option value="1">1</Option>
                                             <Option value="2">2</Option>
                                             <Option value="3">3</Option>
                                         </Select>
                                         <span>成人</span>
                                         <Select defaultValue='0' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                             <Option value="1">1</Option>
                                             <Option value="2">2</Option>
                                             <Option value="3">3</Option>
                                         </Select>
                                         <span>儿童</span>
                                     </div>
                                 </div>
                                 <div className="fixed-create-add-people">
                                     <div className="fixed-create-flex">
                                         <span>房间2：</span>
                                         <div className="fixed-create-flex-item2">
                                             <input type="text" placeholder="姓"/>/<input type="text" placeholder="姓"/>
                                         </div>
                                     </div>
                                     <div className="fixed-create-flex" style={{ marginLeft: 55 }}>
                                         <Select defaultValue='2' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                             <Option value="1">1</Option>
                                             <Option value="2">2</Option>
                                             <Option value="3">3</Option>
                                         </Select>
                                         <span>成人</span>
                                         <Select defaultValue='0' style={{ width: 50 , marginLeft: 10, marginRight: 10}}>
                                             <Option value="1">1</Option>
                                             <Option value="2">2</Option>
                                             <Option value="3">3</Option>
                                         </Select>
                                         <span>儿童</span>
                                     </div>
                                 </div>

                             </div>
                          </div>
                          <div className="fixed-create-footer">
                              <div className="fixed-create-button-last" onClick={() => {
                                  this.setState({
                                      isAdd4: false,
                                      isAdd3: true,
                                  })
                              }}>上一步</div>
                              <div className="fixed-create-button-next" onClick={() => {
                                  this.setState({
                                      isAdd4: false,
                                      isAdd5: true,
                                  })
                              }}>下一步</div>
                          </div>
                      </div>
                      : ''
              }
              {
                  this.state.isAdd5
                  ? <div className="fixed-create">
                          <div className="fixed-create-header">
                              <span>新增用户</span>
                              <div onClick={() => {
                                  this.setState({
                                      mask: false,
                                      isAdd5: false,
                                  })
                              }}>取消</div>
                          </div>
                      <div className="fixed-create-content">
                          <div className="fixed-create-item-line">
                              <div className="fixed-create-flex">
                                  <span>酒店信息：</span>
                                  <label className="margin-right">威尼斯人大酒店 - 双人房*2间*1晚</label>
                                  {
                                      this.state.isDisplay
                                          ? <div className="icon-box" onClick={() => {this.setState({isDisplay:false})}}>
                                              <Icon type="down" />
                                          </div>
                                          : <div className="icon-box" onClick={() => {this.setState({isDisplay:true})}}>
                                              <Icon type="up" />
                                          </div>
                                  }
                              </div>
                              <div className="fixed-create-flex">
                                  <span>入离时间：</span>
                                  <label>2017.09.03</label> - <label>2017.09.04</label>
                              </div>
                              {
                                  this.state.isDisplay
                                      ? ''
                                      : <div>
                                          <div className="fixed-create-add-people">
                                              <div className="fixed-create-flex">
                                                  <span>房间1：</span>
                                                  <span>Lin / Zhanghao</span>
                                              </div>
                                              <div className="fixed-create-flex" style={{ marginLeft: 65 }}>
                                                  <span>成人*2 儿童*2</span>
                                              </div>
                                          </div>
                                          <div className="fixed-create-flex">
                                              <span>入住偏好：</span>
                                              <span>尽量安排1张特大床  尽量安排安静的房间 </span>
                                          </div>
                                      </div>
                              }
                          </div>
                          <div className="fixed-create-flex">
                              <span>用户ID：</span>
                              <label>bkahsugs</label>
                          </div>
                          <div className="fixed-create-flex">
                              <span>联系人：</span>
                              <div className="fixed-create-flex-item">
                                  <input type="text" placeholder="联系人姓名"/>
                              </div>
                          </div>
                          <div className="fixed-create-flex">
                              <span>联系电话：</span>
                              <div className="fixed-create-flex-iphone1">
                                  <input type="text" placeholder="区号"/>
                              </div>
                              <div className="iphone-line"> </div>
                              <div className="fixed-create-flex-iphone2">
                                  <input type="text" placeholder="区号"/>
                              </div>
                          </div>
                      </div>
                      <div className="fixed-create-footer">
                          <div className="fixed-create-button-last" onClick={() => {
                              this.setState({
                                  isAdd5: false,
                                  isAdd4: true,
                              })
                          }}>上一步</div>
                          <div className="fixed-create-button-next" onClick={() => {
                              this.setState({
                                  isAdd5: false,
                                  isAdd6: true,
                              })
                          }}>下一步</div>
                      </div>
                  </div>
                  : ''
              }
              {
                  this.state.isAdd6
                  ? <div className="fixed-create">
                          <div className="fixed-create-header">
                              <span>新增用户</span>
                              <div onClick={() => {
                                  this.setState({
                                      mask: false,
                                      isAdd6: false,
                                  })
                              }}>取消</div>
                          </div>
                          <div className="fixed-create-content">
                              <div className="fixed-create-item-line">
                                  <div className="fixed-create-flex">
                                      <span>酒店信息：</span>
                                      <label className="margin-right">威尼斯人大酒店 - 双人房*2间*1晚</label>
                                      {
                                          this.state.isDisplay
                                              ? <div className="icon-box" onClick={() => {this.setState({isDisplay:false})}}>
                                                  <Icon type="down" />
                                              </div>
                                              : <div className="icon-box" onClick={() => {this.setState({isDisplay:true})}}>
                                                  <Icon type="up" />
                                              </div>
                                      }
                                  </div>
                                  <div className="fixed-create-flex">
                                      <span>入离时间：</span>
                                      <label>2017.09.03</label> - <label>2017.09.04</label>
                                  </div>
                                  {
                                      this.state.isDisplay
                                          ? ''
                                          : <div>
                                              <div className="fixed-create-add-people">
                                                  <div className="fixed-create-flex">
                                                      <span>房间1：</span>
                                                      <span>Lin / Zhanghao</span>
                                                  </div>
                                                  <div className="fixed-create-flex" style={{ marginLeft: 65 }}>
                                                      <span>成人*2 儿童*2</span>
                                                  </div>
                                              </div>
                                              <div className="fixed-create-flex">
                                                  <span>入住偏好：</span>
                                                  <span>尽量安排1张特大床  尽量安排安静的房间 </span>
                                              </div>
                                          </div>
                                  }
                              </div>
                              <div className="fixed-create-item-line">
                                  <div className="fixed-create-flex">
                                      <span>用户ID：</span>
                                      <label>bkahsugs</label>
                                  </div>
                                  <div className="fixed-create-flex">
                                      <span>联系人：</span>
                                      <div className="label-collection">
                                          <label>孙丹菲</label><label>+86 12332112345</label>
                                      </div>
                                  </div>
                              </div>
                              <div className="hotel-pay-detail">
                                  <div className="pay-detail-item">
                                      <span>房费：</span><span>￥2345</span>
                                  </div>
                                  <div className="pay-detail-item">
                                      <span>税费服务费：</span><span>￥100</span>
                                  </div>
                                  <div className="pay-detail-item">
                                      <span>总费用：</span><span>￥2445</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      : ''
              }
              <Head focus={'订单管理'} others={options} active={'order'}/>
              <Navigation lines={navigation} ebutton={buttonType} handleCreate={this.handleCreate.bind(this)}/>
              <FormHeader/>
              <SearchRecord record={list} />
          </div>
    );
  }
}

const mapStateToProps = state => ({
    list: state.HotelOrderReducer.list,
});

export default connect(mapStateToProps)(Order);




