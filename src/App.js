import React from 'react'
import {BrowserRouter as Router,Redirect,Route,Link,Switch} from 'react-router-dom'
import Home from './taobao/Home'
import Cart from './taobao/Cart'
import Mytab from './taobao/Mytab'
import Order from './taobao/Order'
import mytaobao from './taobao/mytaobao'
import Page from './taobao/Page'
import Search from './taobao/Search'
import { Provider } from 'react-redux'
import store from './taobao/store'
import Login from './taobao/login1'

const App = () => {
	return (
	<Provider store={store}>
	   <Router>   
		    <Switch>
			    <Route path='/login' component={Login} />
				
			    <Route  path='/Collection' component={Cart} />
			    <Route  path='/order' component={Order} />
			    <Route  path='/mytaobao' component={mytaobao} />
			    <Route  path='/page' component={Page} />  
			    <Route  path='/search' exact component={Search} />
			    <Route path='/' component={Home} />
			    <Route exact path='/' component={Home} />
				
			    <Route render={()=><Redirect to ='/' />} />
		    </Switch>
		    
		    <Mytab />
		</Router>
	</Provider>
	)
}

export default App




//  export function PrivateRoute(route) {
// 	return (
// 	  <Route
// 		render={({ location }) =>
// 		   localStorage.getItem('userinfo')
// 		//    doc 子组件
// 		   ?<route.component {...route} 
// 		     render={props=>(
// 				 <route.component {...props} routes={routes.routes} />
// 			 )}
// 		   /> 
// 		   : (
// 			<Redirect
// 			  to={ { 
// 				pathname:'/login',
// 				state: location 
// 			  }}
// 			/ >
// 		  )
// 		}
// 	  />
	{/* );
  }
const App = ()=>{
	return <Router>
     	<Header />
		<Switch>
		{
			routes.map((route,idx)=>{
				if(route.pri){
					return <PrivateRoute key={idx} {...route} />
				}
                    return <RouteWithSubRoutes key={idx} {...route} />
			   }	
			)
		

		}	  		
		</Switch>	
 	</Router>	
}	
export default App; */}



// import React from 'react'
// import Order from './taobao/Order'
// import Cart from './taobao/Cart'
// const App = () => {
// 	return (
// 	)
// }

// export default App


// import React from 'react'
// import store from './Redux/Store'
// import {useState,useEffect
// } from 'react'
// import Input from './Redux/Input'
// import {BrowserRouter as Router,Redirect,Route,Link,Switch} from 'react-router-dom'
// import Todo from './Redux/Todo'
// import { Provider } from 'react-redux'
// const App = () => {
// 	// const [todo,setTodos]=useState(store.getState());
// 	// useEffect(() => {
// 	// 	store.subscribe(()=>{
// 	// 		setTodos(store.getState);
// 	// 	})
		
// 	// }, [])
	
// 	return (
// 		<Provider store={store}>
// 		<Router>
// 			<Input />
// 			<Todo />
// 		</Router>
// 		</Provider>
// 	)
// }

// export default App

// import React,{useState,useEffect} from 'react';
// import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
// import store from './Redux/Store';
// import { Provider } from 'react-redux'
// import Todo from './Redux/Todo';
// import Input from './Redux/Input';
// import Home from './Redux/Home';


// const App = ()=>{
// 	return <Provider store={store}>
// 		<Router>
// 			<Home />
// 			<Input />
// 			<Todo />
// 		</Router>
// 	</Provider>
// }
// export default App;