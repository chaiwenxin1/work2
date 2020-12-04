import React, { Component } from 'react';

// 组件名首字母一定要大写
class Control extends Component {
    constructor(){
        super();
        this.state = {
            inpValue: '',
            todos:[]
        }
    }
    handleChange = (e)=>{
        this.setState({inpValue:e.target.value});
    }
    componentDidMount(){
       // this.input.focus();
        let todos=localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos:JSON.parse(todos)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem("todos",JSON.stringify(this.state.todos)) 
        return true;
    }
    getData=()=>{
        if(this.state.inpValue!=''){
            this.setState({
                todos:[
                   {
                      title:this.state.inpValue,
                      done:false
                  },  //...扩展运算符
                      ...this.state.todos
                ],
                inpValue:''
            })

        }
    //   this.state.todos.push({title:this.state.inpValue});不建议写
     

    }
    // dele=(idx)=>{
    //     // this.state.todos.splice(index,1);
    //     // this.setState({
    //     //     todos:this.state.todos
    //     // })
    //     // let newTodos=JSON.parse(JSON.stringify(this.state.todos)); //深拷贝
    //     // newTodos.splice(idx,1);
    //     // this.setState({todos:newTodos});
    //     this.setState({
    //         todos:this.state.todos.filter((item,index)=>index!=idx)
    //     });

    // }
    //方式一 使用filter方法实现过滤
    dele=(idx)=>{
        this.setState({
           todos:this.state.todos.filter((item,index)=>index!==idx)
      }
   // ,()=>{
    //     localStorage.setItem("todos",JSON.stringify(this.state.todos)) 
    //    }
    ); 
         
    }
    toggle=(idx)=>{
        let newTodos=JSON.parse(JSON.stringify(this.state.todos));
        newTodos[idx].done=!newTodos[idx].done;
        this.setState({
             todos:newTodos
        })
    }
    renderTodos=(done)=>{
       return this.state.todos.map((todo,idx)=>{//小括号只是简单的包裹块
            if(done===todo.done)
               return <li>
                <input
                onClick={()=>this.toggle(idx)} 
                checked={done} type="checkbox" />
              <span>{todo.title}</span>
              <button onClick={()=>this.dele(idx)}>删除</button>  
            </li>
        })//传参只能这样
                    
    }
    render() {
        const {todos,inpValue}=this.state;
        let unfinish=[];
        unfinish=todos.filter(item=> !item.done)
        // console.log(unfinish);
        return (
            <div>
                <label htmlFor='inp'>todolist</label>
                <input 
                    id='inp'
                    ref={inp=>this.input = inp}
                    value={this.state.inpValue} 
                    type="text" 
                    onChange={this.handleChange}
                />
                <button  onClick={this.getData}>添加</button>
               
        <h2>正在进行{unfinish.length}</h2>
                <ul>
                    
                       {this.renderTodos(false)}
                    
                </ul>
        <h2>已经完成</h2>
                <ul>
                    {/* {
                        todos.map((todo,idx)=>{//小括号只是简单的包裹块
                            if(todo.done)
                               return <li>
                                <input type="checkbox" />
                              <span>{todo.title}</span>
                              <button onClick={()=>this.dele(idx)}>删除</button>  
                            </li>
                        })//传参只能这样
                    } */}
                    {this.renderTodos(true)}
                </ul>
            </div>
        );
    }
}

export default Control;
   //异步请求，立马执行之后， 