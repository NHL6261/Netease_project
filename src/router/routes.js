import Mister from '../page/Mister/mister.vue'
import Classer from '../page/Classer/classer.vue'
import Meriter from '../page/Meriter/meriter.vue'
import Shopping from '../page/Shopping/shopping.vue'
import Seul from '../page/Seul/seul.vue'
import ClickHeader from '../page/ClickHeader/ClickHeader.vue'
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
        meta:{
            FooterisShow:true
        }
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