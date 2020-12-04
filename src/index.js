import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// import 'antd-mobile/dist/antd-mobile.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import TodoList from './components/TodoList'
// import List from './components/List'
// import Input from './components/Input'
// ReactDOM.render(
//    <TodoList />,
//    document.getElementById("root")
// );
// import  App from './pages/App';
// import  Hoc,{Detail} from './pages/Hoc';
// import Hook from './pages/Hook.js'
// import Context from './pages/Context'
// ReactDOM.render(
//   //  <div><Hoc /> <Detail/></div>,
//   <div>
//   <Context.Provider value='123'>
//     <Hook />
//   </Context.Provider>
//   </div>, 
//     document.getElementById('root')
//   );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Home from './pages/Home';
// import Control from './components/Control';
// console.log(200);
// function Hello( props ) { 
//   console.log(props.name);
// 	return <h1>Hello { props.name }</h1>
// } 
// ReactDOM.render(
// 	<Hello name='React '/>, document.getElementById('root')
// ); 

// ReactDOM.render(
//   <Control />,
//   document.getElementById('root')
// );
// export default Control;



// // ReactDOM.render(
// //   <div />,
// //   document.getElementById('root')
// // );
// // const List=(props)=>{
// //   return <ul>
// //     {
// //       props.data.map(
// //       (item)=><li key={item.id}>{item.title}</li>
// //       )
// //     }
// //   </ul>
// // }

// // class Home extends React.Component{
// //   constructor(props){
// //     super(props);
// //     this.state={
// //       data:[]
// //     }
// //     console.log(this.props);
    
// //   }
// //   componentDidMount(){
// //     fetch('https://cnodejs.org/api/v1/topics')
// //     .then(res=>res.json())
// //     .then(({data})=>{
// //       this.setState({data});
// //     })
// //   }
// //  getDate=(page)=>{
// //     console.log(page);
// //     fetch('https://cnodejs.org/api/v1/topics?page='+page)
// //      .then(res=>res.json())
// //      .then(({data})=>{
// //       this.setState({data});
// //      })
    
// //  }
// // render(){
// //   const {data}=this.state;
// //   const btns=[1,2,3,4,5];
  

// //   return <div>
// //     {
// //       btns.map((item)=><button
// //        key={item} onClick={()=>this.getDate(item)}>
// //          {item}
// //          </button>)    
// //     }
// //     <List data={data} />
// //   </div>
// //  }
// // }








// // class Hello extends React.Component{
// //   constructor(){
// //        super();
// //        this.state={
// //          name:'mianhua'
// //        }
// //        setTimeout(() => {//箭头函数指向当前继承的对象
// //          this.setState({name:'mujin'});//组件重新执行，值会发生变化
// //        }, 3000);
// //   }
// //   render(){
// //   return <div>
// //   <div>name:{this.state.name}</div>
// //   <h1>hello,{this.props.name}</h1>
// //   </div>
// //   } 
// // }
// // ReactDOM.render(
// //   <Hello name='南风木槿'/>,document.getElementById('root')
// // );

// //函数组件
// //ui组件，木偶组件
// // function App(props){
// //   console.log(props);
// //   const {title,name}=props;
// //      return <div>
// //        hello world,{name,title}
// //      </div>
// // }
// //   ReactDOM.render(
// //     <App name='react' title='id'/>,document.getElementById('root')
// //   );
// // let ele=<h1 id="title">hello react</h1>;
// // let ele=React.createElement('h1',{id:'title'},'hello react');
// // let ele=<h1 id="title" className='tit'>
// //   hello world
// // </h1>
// // let ReactDOM={
// //   render(eleObj,container){
// //     //解构
// //       const{
// //         type,props
// //       }=eleObj;
// //       //创建第一层
// //       let ele=document.createElement(type);
// //       //遍历属性对象，将属性添加到第一层对象上
// //       for (const prop in props) {
// //         if(prop=='children'){
// //           if(typeof props.children=='string'){
// //             const txtNode=document.createTextNode(props.children);
// //               ele.appendChild(txtNode);    
// //               break;
// //           }
// //           props.children.forEach(child => {
// //             if(typeof child=='string'){
// //               const txtNode=document.createTextNode(child);
// //               ele.appendChild(txtNode);            
// //             }else{
// //               ReactDOM.render(child,ele);
// //             }
            
// //           });
// //           // ele.setAttribute('class',props[prop]);
// //         }else{
// //             ele[prop]=props[prop];
// //         }
          
        
// //       }
// //       //将第一层DOM节点添加到container中
// //       container.appendChild(ele);
// //   }
// // }

// // setInterval(() => {
// //   let ele=<h1>{new Date().toLocaleString()}</h1>;
// //   ReactDOM.render(
// //   // <React.StrictMode>
// //   //      <h1>hello react</h1>
// //   // </React.StrictMode>,
// //   ele,
// //   document.getElementById('root')
// // );
  
// // }, 1000);



// /**
//  1.1.原生js,DOM操作（jQuery）（必看）
//  1.2.react：开发效率高，性能高
//  1.3. 环境的搭建，创建一个项目，运行
//  1.4.jsx语法
//  */