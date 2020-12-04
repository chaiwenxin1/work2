import React from 'react';
import {TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Mytab extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		selectedTab: 'blueTab',
		isHidden:false,
	  };
	}
	render() {
	  const { pathname } = this.props.location;
	  return (
		<div style={{ position: 'fixed', width: '100%',bottom:0} }>
		  <TabBar
			unselectedTintColor="#949494"
			tintColor="orange"
			barTintColor="white"
			
		  >
			<TabBar.Item
			  title="首页"
			  key="shouye"
			  icon={
				  <i className='iconfont icon-Homehomepagemenu'></i>
			  }
			  selectedIcon={
				  <i className="iconfont icon-Homehomepagemenu1"></i>
			  }
			  selected={pathname === '/'}
			 
			  onPress={() => {
                this.props.history.push('/')
			  }}
			  data-seed="logId"
			>
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<i className='iconfont icon-shoucang'></i>
			  }
			  selectedIcon={
				<i className='iconfont icon-shoucang1'> </i>
			  }
			  title="收藏"
			  key="shoucang"
			  selected={pathname === '/Collection'}
			  onPress={() => {
				  
				this.props.history.push('/Collection');
			  }}
			  data-seed="logId1"
			>
			  
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<i className='iconfont icon-iconfontdingdan1'></i>
				  
			  }
			  selectedIcon={
				<i className='iconfont icon-iconfontdingdan'></i>
			  }
			  title="订单"
			  key="dingdan"
			  selected={pathname === '/Order'}
			  onPress={() => {
				this.props.history.push('/Order')
			  }}
			>
			
			</TabBar.Item>
			<TabBar.Item
			  icon={
				  <i className='iconfont icon-mine'></i>
			  }
			  selectedIcon={
				  <i className='iconfont icon-mine-red'></i>
			  }
			  title="我的淘宝"
			  key="wodetaobao"
			  selected={pathname === '/mytaobao'}
			  onPress={() => {
				this.props.history.push('/mytaobao')
			  }}
			>
			
			</TabBar.Item>
		  </TabBar>
		</div>
	  );
	}
  }
export default withRouter(Mytab);