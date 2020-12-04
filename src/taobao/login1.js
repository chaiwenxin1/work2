import React,{useState} from 'react'
import { connect } from 'react-redux';
import {login} from './Reducer/actionCreators'
const Login = (props) => {
    const lost=()=>{
     props.dispatch(login()); 
    }
    return (
        <div style={{backgroundColor:'#fff',height:'1000px',zIndex:'110px'}}>
        <div style={{height:'391px'}}>  
            <div style={{height:'391px',width:'335px',margin:'0 auto'}}>
                <div  style={{height:'120px',width:'335px'}}>
                  <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" 
                    style={{width:'80px',height:'80px',marginTop:'40px',marginLeft:'128.5px'}}></img>
                </div>
                <div style={{height:'171px'}}>
                    <div style={{height:'71px'}}>
                        <div style={{height:'31px',marginTop:'38px'}}>
                            <input type='text' placeholder='手机号/邮箱/会员名' style={{width:'100%',border:'none',fontSize:'16px',height:'31px',borderBottom:'2px solid rgb(255,182,149)'}}></input>
                        </div>
                    </div>
                    <div style={{height:'31px'}}>
                        <div style={{height:'31px',}}>
                            <input type='password' placeholder='请输入登录密码'  style={{width:'100%',border:'none',fontSize:'16px',height:'31px',borderBottom:'2px solid rgb(255,182,149)'}}></input>
                        </div>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <span>短信验证码登录</span>
                    </div>
               </div>
               <button onClick={lost} style={{width:'100%',height:'45px',borderRadius:'22.5px 22.5px',border:'none',backgroundColor:'rgb(255,102,0)'}}>
                <span style={{color:'#fff',fontSize:'18px'}}>登录</span> 
               </button>
            {
                props.userinfo?
                props.history.goBack(): ' '
            }
            </div> 
        </div>
        <div style={{ width:'100%',height:'60px',position:'fixed',bottom:0,display:'flex',zIndex:'110',backgroundColor:'white'}}>

        </div>
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    userinfo: state.userinfo.userinfo
})
export default connect(mapStateToProps)(Login)
