// import React from 'react'
// import PropTypes from 'prop-types'
// import Context from './Context'
// import Practise1 from './Practise1.js';
// const Practise = (props) => {
//     return (
//         <div style={{width:100,height:'100px',backgroundColor:'pink'}}>
//             {/* {props.name} */}
//             <Context.Consumer>
//                 {
//                     // (data)=>{
//                     //     return <div>
//                     //         {data.data}
//                     //     </div>
//                    // }
//                 (data)=>data.data.map(
//                     (item)=><li key={item}>{item}
//                 </li>
//                 )
//                 }
//             </Context.Consumer>
//             <Practise1 />
//         </div>
//     )
// }
// Practise.propTypes={
//     name:PropTypes.string.isRequired
// }
// Practise.defaultProps={
//     name:'Tom'
// }
// export default Practise
