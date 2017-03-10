import * as types from './mutation-types'

export default {
  addTotalNum({ commit }, num) {
    commit(types.ADD_TOTAL_NUM, num) //触发状态更改types.ADD_TOTAL_TIME
    // 触发状态改变可以简单的理解为在组件方法中提交 mutation,而不是直接更改状态
    // 改变状态的唯一方式是commit mutaion
    // time 为传递的payload（载荷）参数
    //action 中可以异步
  },
  decTotalNum({ commit }, num) {
    commit(types.DEC_TOTAL_NUM, num)
  },
  saveDiary({ commit }, diary) {
    commit(types.SAVE_DIARY, diary);
  },
  deleteDiary({ commit }, diary) {
    commit(types.DELETE_DIARY, diary)
  }
};
