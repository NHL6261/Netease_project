import {
    SAVA_LISTITEM,
    SAVA_NEWLIST,
    SAVA_TIMELIMIT,
    SAVA_FIRSTLIST,
    SAVA_AUTARKYLIST,
    SAVA_RECOMMENDLIST,
    SAVA_CLASSERLIST
} from './mutations-type'

export default {
    [SAVA_LISTITEM](state,listitem){
        state.listitem = listitem
    },
    [SAVA_NEWLIST](state,newlist){
        state.newlist = newlist
    },
    [SAVA_TIMELIMIT](state,gettimelimit){
        state.gettimelimit = gettimelimit
    },
    [SAVA_FIRSTLIST](state,getnewfirstlist){
        state.getnewfirstlist = getnewfirstlist
    },
    [SAVA_AUTARKYLIST](state,autarkylist){
        state.autarkylist = autarkylist
    },
    [SAVA_RECOMMENDLIST](state,recommendlist){
        state.recommendlist = recommendlist
    },
    [SAVA_CLASSERLIST](state,classerlist){
        state.classerlist = classerlist
    }
}