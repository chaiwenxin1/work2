import React from 'react'
import {Route} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
const RouteWithSubRoutes = (route,idx) => {
    console.log(route.exact);
    console.log(route.path);
    
    return (
        <Route key={idx} path={route.path} 
        render={
            props=>(
                <route.component {...props} childroutes={route.childroutes} />
            )
          }  
    />
    );
}

export default RouteWithSubRoutes
