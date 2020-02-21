import {
    getListItem,
    getNewListItem,
    getTimeLimit,
    getNewFirstList,
    AutarkyList,
    RecommendList,
    ClasserList
}from '../api'

import {
    SAVA_LISTITEM,
    SAVA_NEWLIST,
    SAVA_TIMELIMIT,
    SAVA_FIRSTLIST,
    SAVA_AUTARKYLIST,
    SAVA_RECOMMENDLIST,
    SAVA_CLASSERLIST
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
        console.log(result)
    }
}

