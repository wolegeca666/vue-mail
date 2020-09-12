export default {
  // 进行异步操作的函数
  update(context, num) {
    return new Promise((resolve) => {
      context.commit('operation', num);
      setTimeout(() => {
        resolve('666')
      }, 1000)
    });
  }
}