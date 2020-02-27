import ajax from './ajax'
import axios from 'axios'

//类目热销榜
export  const getListItem = () => ajax({
    url: '/indexListAction'
  })

// 获取新品首发
  export const getNewListItem = () => ajax({
    url:'/getIndexNewList'
  })

  // 限时购
  export const getTimeLimit = () => ajax({
    url:'/getIndexList'
  })

  // 新品首发
  export const getNewFirstList = () => ajax({
    url:'/getFirstList'
  })

  // 自营品牌
  export const AutarkyList = () => ajax({
    url:'/getAutarkyList'
  })

  // 推荐
  export const RecommendList = () => ajax({
    url:'/getRecommendList'
  })

  // 分类数据
  export const ClasserList = () => ajax({
    url:'/getClasserList'
  })

  // 获取左侧Id
  export const NavLeftList = () => ajax({
    url:'/getNavLeftList'
  })

  // 获取右侧图片列表
export const getCatListItem = () => ajax({
  url:'getCatListItem'
})


// 获取值得买数据 axios
export const getWorthyNav = () =>axios.get('/wangyi/topic/v1/know/navWap.json')
export const getWaterFallData = ()=>axios.get('/wangyi/topic/v1/find/recManual.json')
export const getPageWaterData = (page,size)=>axios.get('/wangyi/topic/v1/find/recAuto.json',{params:{page,size}})