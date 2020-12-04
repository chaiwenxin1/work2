import React ,{Component}from 'react';
class List extends Component{
  constructor(props){
    super(props);
    // this.toggle=this.toggle.bind(this);
    // this.handleDelete=this.handleDelete.bind(this);
  }
  handleDelete(){
    this.props.deleTodo(this.props.idx);
  }
  renderTodos=(done)=>{
            return this.props.data.map((todo,idx)=>{//小括号只是简单的包裹块
                 if(done===todo.done)
                    return <li>
                     <input
                     onClick={()=>this.props.toggle(idx)} 
                     checked={done} type="checkbox" />
                   <span>{todo.title}</span>
                   <button onClick={()=>this.props.deleTodo(idx)}>删除</button>  
                 </li>
             })//传参只能这样               
         }
  
  
  render(){
    const todos=this.props.data;
    let unfinish=[];
    unfinish=todos.filter(item=>!item.done);
    let finish=[];
    finish=todos.filter(item=>item.done);
    return(
      <div>
         <h2>正在进行{unfinish.length}</h2>
          <ul>
             {this.renderTodos(false)}
           </ul>
          <h2>已经完成{finish.length}</h2>
          <ul>
             {this.renderTodos(true)}
          </ul>  
       
      </div>
    )
  }
}


export default List;