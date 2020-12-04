import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom';
import './searchbar.css'
//搜索栏
 class Searchtab extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    
    render() {
        console.log(this.props);
        return (
            <header className='searchbar' style={{position:'fixed',top:0,left:0,zIndex:110}}>
                <i className="iconfont icon-taobao-line"></i>    
                <div className='header'>
                    <Link to='/search' >
                     <div className='placeholder'>
                        <span className='text iconfont icon-sousuo'>
                           寻找宝贝店铺
                        </span>
                     </div> 
                     </Link>                 
                </div>    
            </header>
        )
    }
}

export default withRouter(Searchtab)
