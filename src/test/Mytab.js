// import React from 'react';
// //import { Button } from 'antd-mobile';
// import { TabBar } from 'antd-mobile';
// import {withRouter} from 'react-router-dom'
// class Mytab extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		selectedTab: '/home'
// 	  };
// 	}
  
// 	render() {
// 	  return (
// 		<div style={{ position: 'fixed', width: '100%', top: 0 } }>
// 		  <TabBar
// 			unselectedTintColor="#949494"
// 			tintColor="#33A3F4"
// 			barTintColor="white"
// 		  >
// 			<TabBar.Item
// 			  title="首页"
// 			  key="首页"
// 			  icon={<div style={{
// 				width: '22px',
// 				height: '22px',
// 				background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
// 			  />
// 			  }
// 			  selectedIcon={<div style={{
// 				width: '22px',
// 				height: '22px',
// 				background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
// 			  />
// 			  }
// 			  selected={this.state.selectedTab === '/home'}
			 
// 			  onPress={() => {
//                 this.props.history.push('/home')
// 			  }}
// 			  data-seed="logId"
// 			>
// 			</TabBar.Item>
// 			<TabBar.Item
// 			  icon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  selectedIcon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  title="口碑"
// 			  key="koubei"
// 			  selected={this.state.selectedTab === '/koubei'}
// 			  onPress={() => {
// 				this.props.history.push('/koubei');
// 			  }}
// 			  data-seed="logId1"
// 			>
			   
// 			</TabBar.Item>
// 			<TabBar.Item
// 			  icon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  selectedIcon={
// 				<div style={{
// 				  width: '22px',
// 				  height: '22px',
// 				  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
// 				/>
// 			  }
// 			  title="教程页"
// 			  key="教程页"
// 			  selected={this.state.selectedTab === 'greenTab'}
// 			  onPress={() => {
// 				this.setState({
// 				  selectedTab: 'greenTab',
// 				});
// 			  }}
// 			>
// 			 教程页
// 			</TabBar.Item>
// 			<TabBar.Item
// 			  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
// 			  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
// 			  title="我的淘宝"
// 			  key="我的淘宝"
// 			  selected={this.state.selectedTab === 'yellowTab'}
// 			  onPress={() => {
// 				this.setState({
// 				  selectedTab: 'yellowTab',
// 				});
// 			  }}
// 			>
// 			我的淘宝
// 			</TabBar.Item>
// 			<TabBar.Item
// 			  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
// 			  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
// 			  title="更多"
// 			  key="更多"
// 			  selected={this.state.selectedTab === 'pinkTab'}
// 			  onPress={() => {
// 				this.setState({
// 				  selectedTab: 'pinkTab',
// 				});
// 			  }}
// 			>
// 			更多
// 			</TabBar.Item>
// 		  </TabBar>
// 		</div>
// 	  );
// 	}
//   }
// export default Mytab;