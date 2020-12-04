// import React from 'react'
// import Context from './Context'
// import Practise from './Practise';
// console.log(Context);
// // const App = () => {
// //   let data={data:['hello','Context']};
// //   return (
// //     <Context.Provider value={data}>
// //       <Practise />
// //     </Context.Provider>
// //   )
// // }
// class App extends React.Component{
//   constructor(){
//       super();
//       this.state = {
//           data:['hello','context'],
//       }
//   }
//   changeData = (newData)=>{
//       this.setState({data:[...this.state.data,newData]})
//   }
//   render(){
//       return (
//           <Context.Provider value={{
//               data:this.state.data,
//               changeData:this.changeData
//           }}>
//               <Practise />
//           </Context.Provider>
//       )
//   }
// }


// export default App;
{/* // return <Router>
// 		<Header>
// 			<Switch>
// 			  {
// 				routes.map(({pri,...rest})=>{
// 					if(pri){
// 						return <PrivateRoute  {...rest}/>
// 					  }
//                     return <Route {...rest} />
// 				  },
// 				 // <Route exact={routes.exact} path={routes.path} component={routes.component}/>
// 				  )
// 			  }
// 			</Switch>
// 	   </Header>
// 	</Router> */}

// return <div>
// 	<Button type='primary'>hello</Button>
// </div>
// }
// return <Router>
// 		<Header />
// 		<Switch>
// 			<Route exact path='/' component={Home} />
// 			<PrivateRoute path='/doc' component={Doc} />
// 			{/* <Route path='/doc/:id' component={ Doc } /> */}
// 			<PrivateRoute path='/tuto' component={Tuto}/>
// 			<PrivateRoute path='/blog' component={Blog}/>
// 			<Route path='/comm' component={Comm}/>
// 			{/* <Route path='/login' component={Login}/> */}
// 		</Switch>
// 	</Router>
// }
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Mytab from './taobao/Mytab'
// import Searchtab from './taobao/Searchtab'
// import shouye from './taobao/shouye'
// import dingdan from './taobao/dingdan'
// import gouwuche from './taobao/gouwuche'
// import wodetaobao from './taobao/mytaobao'
// const  App=()=>{
// 	return (
// 	<Router>
// 		<Searchtab />
// 		<Switch>
// 			<Route exact path='/' component={shouye}/>
//             <Route path='/gouwuche' component={gouwuche} />
// 			<Route  path='/dingdan' component={dingdan} />
// 			<Route  path='/wodetaobao' component={wodetaobao} />
// 		</Switch>
// 	    <Mytab />
		
// 	</Router>
// 	)
// }

// export default App;


// import React from 'react'
// import {BrowserRouter as Router,Route,Link,Switch,NavLink} from 'react-router-dom'
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
// //BrowserRouter和hashRouter区别
// const Home=()=>{
//     return <div>home</div>
// }
// const About=(props)=>{
//     console.log(props.location.state.id);
//     return <div>About</div>
// }
// const Content=(props)=>{
//     console.log(props.match.params.id);
//     return <div>{props.match.params.id}</div>
// }
// const App = () => {
//     return (
//        <Router>
//            <ul>
//                <li><NavLink exact activeStyle={{color:'red'}} to='/'>home</NavLink></li>
//                <li><NavLink activeStyle={{color:'yellow'}} to={ { 
// 	                pathname: '/about', 
// 	                search: '?sort=name', 
//                     state:{id : 1}
//                  }}     
//                     >about</NavLink></li>
//                     <li><NavLink activeStyle={{color:'blue'}} to='/content/1'>content1</NavLink></li>
//                     <li><NavLink activeStyle={{color:'blue'}} to='/content/2'>content2</NavLink></li>
//            </ul>
//            <Switch>
//                {/* switch中有exact没生效 */}
//            <Route exact path='/' component={Home}/>   
//            {/* exact 严格匹配 */}
//            <Route path='/about' component={About}>
//                {/* <About /> */}
//            </Route>
//            <Route path='/news' render={()=>{ return <div>News</div>}
//            } />
//            {/* <Route  path="/:id" render={()=><Redirect to='/news'></Redirect>}/> */}

//            <Route path='/content/:id' component={Content}></Route>
//            </Switch>


//            {/* 动态路由放在静态路由后面，保证成功匹配 */}
//        </Router>
//     )
// }

// export default App;
