import React from 'react'
import { withRouter } from 'react-router-dom';
const Search = (props) => {
    return (
        <div style={{width:'100%',height:'100%',backgroundColor:'rgb(245,245,249)',
             position:"fixed",zIndex:'110'}}>
        <header style={{backgroundColor:'white',height:'45px'}}>
            <div style={{color:'#212121',height:'32px',display:'flex',
                padding:'6px 10px'}}>
                <div style={{color:'rgb(166,168,174)',width:'300px',
                        lineHeight:'30px',borderRadius:'4px',
                        backgroundColor:'#e3e3e5'}}>
                    <span style={{marginLeft:'10px'}}>
                        宝贝<i className='iconfont icon-jiantou'></i>
                        </span>
                    <input style={{border:'none',background:'none',width:'217px',height:'20px'}}></input>
                    <span style={{marginLeft:'3px'}}><i className='iconfont icon-search' style={{fontSize:'20px'}}></i></span>
            </div>
            <div style={{marginLeft:'20px'}}>
                <div style={{fontSize:'12px',height:'32px',lineHeight:'32px'}}
                    onClick={()=>props.history.goBack()}>取消</div>
            </div>
            </div>
        </header>
        </div>
    )
}

export default withRouter(Search)
