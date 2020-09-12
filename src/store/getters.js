export default {
  // computed
  powerCount(state, getter) {
    return function (num = 2) {
      return state.counter * num
    }
  }
}