import Mister from '../page/Mister/mister.vue'
import Classer from '../page/Classer/classer.vue'
import Meriter from '../page/Meriter/meriter.vue'
import Shopping from '../page/Shopping/shopping.vue'
import Seul from '../page/Seul/seul.vue'

export default [
    {
        path:'/mister',
        component:Mister
    },
    {
        path:'/classer',
        component:Classer
    },
    {
        path:'/meriter',
        component:Meriter
    },
    {
        path:'/shopping',
        component:Shopping
    },
    {
        path:'/seul',
        component:Seul
    },
    {
        path:'/',
        redirect:'/mister'
    }
]