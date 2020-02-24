import Mister from '../page/Mister/mister.vue'
import Classer from '../page/Classer/classer.vue'
import Meriter from '../page/Meriter/meriter.vue'
import Shopping from '../page/Shopping/shopping.vue'
import Seul from '../page/Seul/seul.vue'
import ClickHeader from '../page/ClickHeader/ClickHeader.vue'
import ClasserRight from '../components/ClasserRight/ClasserRight.vue'
import Login from '../page/Seul/login/login.vue'
export default [
    {
        path:'/mister',
        component:Mister,
        meta:{
            FooterisShow:true
        }
    },
    {
        path:'/classer',
        component:Classer,
        children:[
            {
                path:'/classer/classerright/:id',
                component:ClasserRight,
                meta:{
                    FooterisShow:true
                }
            }
        ],
        meta:{
            FooterisShow:true
        }
    },
    {
        path:'/meriter',
        component:Meriter,
        meta:{
            FooterisShow:true
        }
    },
    {
        path:'/shopping',
        component:Shopping,
        meta:{
            FooterisShow:true
        }
    },
    {
        path:'/seul',
        component:Seul,
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/clickheader',
        component:ClickHeader
    },
    {
        path:'/',
        redirect:'/mister'
    }
]