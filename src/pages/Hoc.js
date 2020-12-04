// import React, { Component } from 'react'

// const withFetch=(Com,url)=>{
//     class Topic extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             data:[] 
//     }
    
// }
// componentDidMount(){
//     fetch(url)
//       .then(res=>res.json())
//        .then((res)=>
//        this.setState({data:res.data})
//        )
// } 
// render(){
//     return <Com data={this.state.data}/>
// }
//    }
//    Topic.displayName=`withfetch(${Com.Name})`;
//    return Topic;
// }




//   const De =(props)=>{
// //     constructor(){
// //         super();
// //         this.state={
// //             data:'' 
// //     }
    
// // }
// // componentDidMount(){
// //     fetch('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312')
// //       .then(res=>res.json())
// //        .then((res)=>
// //        this.setState({data:res.data.content})
// //        )
// // }
 
//  return (
//             <div>
//                 <h1>标题</h1>
//             {/* <div>{this.state.data}</div> */}
//  <div dangerouslySetInnerHTML={{__html:props.data.content}}></div>
//             </div>
//         )
//     }
// export const Detail=withFetch(De,'https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312')

// //  class Hoc extends Component {
//     //  constructor(){
//     //      super();
//     //      this.state={
//     //          data:[]
//     //      }
//     //  }

//     // componentDidMount(){
//     //     fetch('https://cnodejs.org/api/v1/topics')
//     //       .then(res=>res.json())
//     //        .then((res)=>
//     //        this.setState({data:res.data})
//     //        )
//     // }
// //     render() {
// //         return (
// //             <div>
// //                 HOC
// //             </div>
// //         )
// //     }
// // }
// const Ho=(props)=>{
//     console.log(props);
//     return <ul>
//       {
//          props.data.map((item)=><li>{item.title}</li>)
//       }
//     </ul>

// }
// const Hoc=withFetch(Ho,'https://cnodejs.org/api/v1/topics')
// export default Hoc;

// //higher order Component