import React, { useEffect } from 'react'
import {BrowserRouter as Router,
    NavLink, Route, Redirect,Switch,
    withRouter
} from 'react-router-dom'
import './doc.css';

import RouteWithSubRoutes from './RouteWithSubRoutes'
const Doc = (props) => {
    console.log(props);
    useEffect(()=>{
        if(!localStorage.getItem('userinfo')){
            console.log(props.history);
            props.history.push({
                pathname:'/login',
                state:props.location
            });
        }
    },[])
    return (
        <Router>
        <div className='doc'>
        <div className="content">
            <Switch>
              {props.childroutes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
                ))}    
             <Redirect to='/doc/core' /> 
            </Switch>
            </div>        
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
            </ol>       
         </div>        
        </Router>
    )
}

export default withRouter(Doc);

  {/* { <NavBar
                mode="light"
                icon={ <Icon type="left" /> }
                onLeftClick={ () => props.history.goBack() }
                rightContent={ [
                    <Icon key="0" type="search" style={ { marginRight: '16px' } } />,
                    <Icon key="1" type="ellipsis" />,
                ] }
            >NavBar</NavBar> } */}
     {/* 嵌套路由 */ }
                {/* <Route path='/doc/:type' component={ DocContent } /> 
                <Redirect from='/doc' to='/doc/core' /> */}