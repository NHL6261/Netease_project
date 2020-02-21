import ajax from './ajax'

//获取推荐数据
export  const getListItem = () => ajax({
    url: '/indexList'
  })