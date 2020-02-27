import {
    getListItem,
    getNewListItem,
    getTimeLimit,
    getNewFirstList,
    AutarkyList,
    RecommendList,
    ClasserList,
    NavLeftList,
    getWorthyNav,
    getWaterFallData,
    getPageWaterData
}from '../api'

import {
    SAVA_LISTITEM,
    SAVA_NEWLIST,
    SAVA_TIMELIMIT,
    SAVA_FIRSTLIST,
    SAVA_AUTARKYLIST,
    SAVA_RECOMMENDLIST,
    SAVA_CLASSERLIST,
    SAVA_NAVLEFTLIST,
    SAVE_WORTHYNAV,
    SAVE_WATERFALLDATA,
    SAVE_PAGEWATERFALLDATA
}from './mutations-type'
export default {
    async getListItemAction({commit}){
        let result = await getListItem()
        commit(SAVA_LISTITEM,result.categoryHotSellModule.categoryList)
    },
    // 新品首发
    async getNewListItemAction({commit}){
        let result = await getNewListItem()
        commit(SAVA_NEWLIST,result)
    },
    // 限时购 
    async getTimeLimitAction({commit}){
        let result = await getTimeLimit() 
        commit(SAVA_TIMELIMIT,result)
    },
    // 新品首发
    async getNewFirstListAction({commit}){
        let result = await getNewFirstList()
        commit(SAVA_FIRSTLIST,result)
    },
    // 自营品牌
    async getAutarkyList({commit}){
        let result = await AutarkyList()
        commit(SAVA_AUTARKYLIST,result)
    },
    // 推荐
    async getRecommendList({commit}){
        let result = await RecommendList()
        commit (SAVA_RECOMMENDLIST,result)
    },
    // 分类
    async getClasserList({commit}){
        let result = await ClasserList()
        commit(SAVA_CLASSERLIST,result)
    },

    // 左侧Id
    async getNavLeftList({commit}){
        let result = await NavLeftList()
        commit(SAVA_NAVLEFTLIST,result)
    },
    // 值得买轮播图
    async getWorthNavData({commit}){
        let result = await getWorthyNav();
        !!(result.data.code === '200') && commit(SAVE_WORTHYNAV,result.data.data);
      },
      async getWaterFallData({commit}){
        let result = await getWaterFallData();
        !!(result.data.code === '200') && commit(SAVE_WATERFALLDATA,result.data.data[0])
      },
      async getPagesData({commit,page,size}){
        let result = await getPageWaterData(page,size);
        !!(result.data.code === '200') && commit(SAVE_PAGEWATERFALLDATA,result.data.data.result)
      }
}

