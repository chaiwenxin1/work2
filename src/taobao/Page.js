import React from 'react'
import './page.css'
import {connect} from 'react-redux'
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            iconShouCang:false,
            Color:false
        };
    }
    iconShouCangChange=()=>{

        console.log(this.props.shoucang)
        this.props.shoucang.push(this.props.location.id);
       
        this.setState({
            iconShouCang:!this.state.iconShouCang,
            Color:!this.state.Color
        })   
    }
    collection=()=>{
        let id=this.props.location.id;
        if(this.props.shoucang.length!==0){
            this.props.shoucang.map(item=>{
                if(item==id){
                    this.setState({
                        iconShouCang:!this.state.iconShouCang,
                        Color:!this.state.Color
                    })    
                }
            })
        }
    }
    
    render(){
         
        const {iconShouCang,Color}=this.state;
        const icon=iconShouCang?'iconfont icon-copy':'iconfont icon-shoucang';
        const text=iconShouCang?'已收藏':'收藏';
        return (
            
            <div className='show'>
                <div  className='pic' onLoad={this.collection}>
                    <img src={this.props.location.img} />
                </div>
                <div className='nav-bar' style={{width:'100%', display: 'flex',justifyContent:'space-between'}}>
                    <button className='btn' onClick={()=>this.props.history.push('/')}>
                        <i className='iconfont icon-fanhui' style={{width:'100%',top:0,fontSize:'15px'}}></i>
                    </button>
                    <button className='btn'>
                        <i className='iconfont icon-gouwuche1'
                        style={{width:'100%',top:0,fontSize:'20px'}}></i>
                    </button>
                </div>
                <div style={{backgroundColor:'#ffffff'}}>
                    <div className='price'>
                        <div className='main-price' >
                            ￥
                        <span className='o-price'>{this.props.location.price}</span>
                            <span style={{backgroundColor:'#FFF1EB',padding:'4px',height:'14px',marginRight:'4px',borderRadius:'20px',fontSize:'9px'}}>卖家促销</span>
                            <span style={{backgroundColor:'#FFF1EB',padding:'4px',height:'14px',marginRight:'4px',borderRadius:'20px',fontSize:'9px'}}>淘宝币可抵0.43元起</span>
                        </div>
                    </div>
                </div>
                <div className='bottom-tab'>
                    <div className='btn-shop' style={{width:'28px'}}>
                       <i className='iconfont icon-taobaodianpu' 
                        style={{fontSize:'22px',color:'#ff5000',paddingLeft:'3px'}} ></i>
                        <span >店铺</span>
                    </div>
                    <div className='btn-kefu' style={{width:'28px'}}>
                       <i className='iconfont icon-taobaokefu-01'
                         style={{fontSize:'22px',color:'rgb(153,153,153)',paddingLeft:'3px'}} ></i>
                        <span >客服</span>
                    </div>
                    <div className='btn-fav' style={{width:'40px'}}>
                       <i className={icon}
                         style={{fontSize:'18px',color:this.state.Color?'rgb(255,80,0)':'grey',paddingLeft:'6px'}}></i>
                         {/* <span onClick={()=>{return this.props.userinfo?this.iconShouCangChange:this.props.history.push('/login')}}></span> */}
                         <span onClick={()=>{return this.props.userinfo?this.iconShouCangChange():this.props.history.push('/login')}}></span>
                         <span >{text}</span>
                    </div>
                    <div className='btn-cart'>
                        <span style={{backgroundColor:'#ffc500',borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}>加入购物车</span>
                        <span style={{backgroundColor:'#ff9402',borderTopRightRadius:'20px',borderBottomRightRadius:'20px'}}>领劵购买</span>
                    </div>

                </div>
            </div>
          
        )
    }
}
const mapStateToProps = (state) =>( { 
    userinfo:state.userinfo,
    shoucang:state.shoucang  
})

export default  connect(mapStateToProps)(Page)
