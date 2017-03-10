import * as types from './mutation-types'
//mutation 中必须同步
export default {
  [types.ADD_TOTAL_NUM] (state, num) {  // 触发类型为types.ADD_TOTAL_NUM时执行回调函数
    state.totalNum = state.totalNum + parseInt(num);
  },
  [types.DEC_TOTAL_NUM] (state, num) {
    state.totalNum = state.totalNum - parseInt(num);
  },
  [types.SAVE_DIARY] (state, diary) {  
    state.list.push(
      Object.assign({ tit: '日记'}, diary) 
    )
  },
  [types.DELETE_DIARY] (state, idx) {
    state.list.splice(idx, 1);
  }
};
