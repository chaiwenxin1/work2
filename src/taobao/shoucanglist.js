import React  from 'react'
import {connect} from 'react-redux'
const Todos=(props)=>{
    console.log(props);
    return (
        <ul>
            {
                props.mydata.map((item,index)=>{
                <li key={index} style={{listStyle:'none'}}>{item}
                <button onClick={(e)=>{
                    props.dispatch({
                        type:'DEL_ID',
                        value:e.state
                    })
                }}
                >取消收藏</button></li>



                })
            }
        </ul>
    )
}
const mapStateToProps=(state)=>{
    return {
        mydata:state.datalist
    }
}
export default connect(mapStateToProps)(Todos)