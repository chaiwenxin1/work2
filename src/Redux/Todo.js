import React from 'react'
import {connect} from 'react-redux'
const Todo = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.mydata.map(
                    (item,idx)=><li key={idx} style={{listStyle:'none'}}> {item} 
                    <button onClick={(e)=>{
                       props.dispatch({
                        type:'DELETE_TODO',
                        value:e.state
                       })
                    }}
                    >删除</button>	</li>
                    )
            }
            
			{/* <button onClick={()=>{
                 props.dispatch({type:'add_todo',value:'hell0'})
			}}>tianjia</button>		 */}
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log(state);
    return {
        mydata:state.todo
    }
}
export default connect(mapStateToProps)(Todo)
