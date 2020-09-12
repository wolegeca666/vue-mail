export default {
  // 同步方法
  operation(state, num) {
    state.counter += num;

    // 数据响应式操作
    // state.msg['age'] = 12
    // Vue.set(state.msg,'age', '12')

    // delete state.msg.height;
    // Vue.delete(state.msg, 'height')
  }
};