import React, { Component } from 'react'
import List from './List'
import Input from './Input'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inpValue:'',
            todos:[]
        }
    }
    handleChange = (e)=>{
        this.setState({inpValue:e.target.value});
        console.log(this.state.inpValue);
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
     componentDidUpdate(preProps,preState)
     {
         console.log(123);
        if(preState.todos!==this.state.todos){
        localStorage.setItem("todos",JSON.stringify(this.state.todos)) 
        }
    }
    addTodo=(data)=>{
        if(this.state.inpValue==''){
            return;
        }
        
        this.setState({
            todos: [
                {
                    title: this.state.inpValue,
                    done: false
                },
                ...this.state.todos
            ]
        })
    }
    
    deleTodo=(idx)=>{
            this.setState({
               todos:this.state.todos.filter((item,index)=>index!==idx)
          });   
        }
    toggle=(idx)=>{
    
        let newTodos=JSON.parse(JSON.stringify(this.state.todos));
        newTodos[idx].done=!newTodos[idx].done;
        this.setState({
            todos:newTodos
    })
}
    render() {
        return (
            <div>
                 
                 <Input  addTodo={this.addTodo} handleChange={this.handleChange}/>
                 <List data={this.state.todos} toggle={this.toggle} deleTodo={this.deleTodo} />
            </div>
        )
    }
}
export default TodoList;
