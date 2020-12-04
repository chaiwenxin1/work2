
import Home from './work2/Home';
import Doc from './work2/Doc';
import Tuto from './work2/Tuto';
import Blog from './work2/Blog';
import Comm from './work2/Comm';
import Login from './work2/Login'
import Core from './work2/Core';
import Guide from './work2/Guide'
import Api from './work2/Api';
import Hooks from './work2/Hooks';

const routes=[
    {
        path:'/',
        exact:true,
        component:Home
    },{
        path:'/doc',
        component:Doc,
        pri:true,
        childroutes:[
            {
                path:'/doc/core', 
                component:Core
            },
            {
                path:'/doc/guide',
                component:Guide,
            },
            {
                path:'/doc/api',
                component:Api,
            },
            {
                path:'/doc/hooks',
                component:Hooks,
            }
        ]
    },
    {
        path:'/tuto',
        component:Tuto,
        pri:true
    },
    {
        path:'/comm',
        component:Comm,
    },
    {
        path:'/blog',
        component:Blog,
    },
    {
        path:'/login',
        component:Login,
    }
]
export default routes;