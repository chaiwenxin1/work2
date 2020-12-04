import React,{useState} from 'react'
 import {connect} from 'react-redux'
import Searchtab from './Searchtab'
import Slideshow from './Slideshow'
import {getgoodslist} from './Reducer/actionCreators'
import { Grid } from 'antd-mobile';

import './listtab.css'

const Home = (props) => {

const list=()=>{
   return props.dispatch(getgoodslist())
 }
 //商品列表
 const [isload,setload]=useState(false);
 if(!isload){
     list();
    setload(!isload);
 }
//  list();
 const data1=[];
 for(let i=0;i<props.datalist.length;i++){
     data1[i]=props.datalist[i];
 }

 
    return (
           <div>
            <Searchtab />
		    <Slideshow />
          {/* 商品详情     */}
         <div className='content' style={{padding:'6px'}}>  
             <div className='recommend-head' >
                 <img src='https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png' alt='' />
             </div>
           
             <div className='listcontent' style={{border:'none',marginTop:'5px',marginBottom:'40px'}}>
                 <Grid data={data1}  columnNum={2} 
                 square={false} hasLine={false}
                 itemStyle={{backgroundColor:'rgb(245,245,249)'}}
                 renderItem={item=>(
                     <div className='item' > 
                        <img src={item.img} alt="" onClick={()=>props.history.push({
                        pathname:'/page',
                        img:item.img,
                        id:item.id,
                        price:item.price,
                    })}/>
                        <div className='detail'>
                           <div className='span'>
                              <span style={{fontSize:'13px',color:'black'}}>
                               {item.title}
                              </span>
                          </div>
                          <div className='row' >
                              <span style={{marginLeft:'-30px',color:'red',fontSize:'11px'}}> ￥</span> 
                 <span style={{color:'red',fontSize:'14px',marginLeft:'5px'}}>{item.price}</span>
                              <span  style={{color:'#999999',fontSize:'11px',marginTop:'2.000004px',marginLeft:'5px'}}>43人已购买</span>
                          </div>
                         </div>
                        
                    </div >
                    // </Link>     
                )}  />
             </div> 
            
        </div>
  
            </div> 
    )
}
const mapStateToProps = (state) =>( {      
        datalist: state.datalist   
})
export default connect(mapStateToProps)(Home)
