import React, { Component } from 'react'
 class Input extends Component {
     constructor(props){
         super(props);
         this.state={
             inpValue:''
         }
     }
     addnew=()=>{
         if(this.refs.inpt.value==''){
             return;
         }
         var obj={
             title:this.refs.inpt.value,
             done:false
         }
         this.props.addTodo(obj);
         this.refs.inpt.value='';
     }

    render() {
        return (
            <div>
                <label htmlFor='inp'>todolist</label>
                <input 
                    id='inp'
                    ref='inpt'
                    type="text" 
                    onChange={this.props.handleChange.bind(this)}
                />
                <button  onClick={this.addnew} >添加</button>
                {/* <button  onClick={()=>this.props.addnew(this.state.inpValue)} >添加</button> */}
            </div>
        )
    }
  inputdata=(inp)=>{
    this.input=inp;
    console.log(this.value);

  } 
}
export default Input;