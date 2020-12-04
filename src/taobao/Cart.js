import React,{useState} from 'react'
import { connect } from 'react-redux'
const Cart = (props) => {
    let img=[];
    props.shoucang.map(id=>{
      props.datalist.map(item=>{
          if(item.id==id){
              img.push(item)
        }
      })
    })
    console.log(img)
    const [init,setinit]=useState(img); 
    const dele=(id,index)=>{
    console.log(index);
       let arr= img.filter((item)=>item.id!==id);
        console.log(arr)
       setinit(arr);
       for(var i=0;i<props.shoucang.length;i++){
           if(props.shoucang[i]==id){
               for(var j=i;j<props.shoucang.length;j++){
                props.shoucang[j]=props.shoucang[j+1];    
               }
               props.shoucang.pop();
           }
       }
       console.log(props.shoucang)
    }
    // console.log(init)
    return (
        <div>
        {
            props.userinfo?
           <div style={{height:'100%',marginBottom:'40px'}}>
             <div style={{
                 width:'100%',
                 height:'100%',
                 backgroundColor:'#fff',
                 marginTop:'20px',
                 borderRadius:'20px'
             }}>
             <ul>
                  {
                      init.map((item,i)=>
                      <li style={{listStyle:'none',display:"flex",justifyContent:'flex-start'}}>
                          <div>
                          <img src={item.img} 
                          style={{height:'130px',width:'130px',
                                borderRadius:5 }}/></div>
                          <div style={{width:'150px',height:'130px'}}>
                          <span style={{display:'block',marginTop:'30px',
                                        fontSize:'15px',marginLeft:'20px'}}>{item.title}</span>
                          <span style={{display:'block',marginTop:'15px',
                                        fontSize:'16px',marginLeft:'20px',
                                        color:'red'}}> ￥{item.price}</span>
                          <span  style={{display:'block',marginLeft:'20px',
                                        fontSize:'10px',marginTop:'5px',
                                        color:'grey'}}>1000+人收藏 </span>
                           </div>
                           <div>
                           <button style={{border:'none',width:'80px',
                                         height:'40px',marginTop:'50px',
                                         borderRadius:'5px',backgroundColor:'orange',color:'white'}} onClick={()=>{dele(item.id,i)}}>取消收藏</button>
                          </div>
                      </li>
                      )
                  }
             </ul>         
             
            </div>   
        </div>
        :props.history.push('/login')
     }
        </div>
    )
}
const mapStateToProps = (state) =>( { 
        
    userinfo:state.userinfo,
    shoucang:state.shoucang,
    datalist:state.datalist
}) 

export default connect(mapStateToProps)(Cart)
