import ajax from './ajax'

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