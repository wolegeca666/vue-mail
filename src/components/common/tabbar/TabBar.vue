<template xmlns="" xmlns="">
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }

  #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 5px rgba(100, 100, 100, 0.1);
    background-color: #f6f6f6;
  }
</style>
