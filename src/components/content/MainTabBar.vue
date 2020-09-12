<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <template v-slot:item="item">
        <img v-if="!item.isActive" class="item-icon" src="~assets/img/tabbar/home.svg" alt="home">
        <img v-else class="item-icon" src="~assets/img/tabbar/home-active.svg" alt="home">
        <div :style="item.activeStyle" class="item-text">首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/class">
      <template v-slot:item="item">
        <img v-if="!item.isActive" class="item-icon" src="~assets/img/tabbar/class.svg" alt="class">
        <img v-else class="item-icon" src="~assets/img/tabbar/class-active.svg" alt="class">
        <div :style="item.activeStyle" class="item-text">分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template v-slot:item="item">
        <img v-if="!item.isActive" class="item-icon" src="~assets/img/tabbar/cart.svg" alt="cart">
        <img v-else class="item-icon" src="~assets/img/tabbar/cart-active.svg" alt="cart">
        <div :style="item.activeStyle" class="item-text">购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/mine">
      <template v-slot:item="item">
        <img v-if="!item.isActive" class="item-icon" src="~assets/img/tabbar/mine.svg" alt="mine">
        <img v-else class="item-icon" src="~assets/img/tabbar/mine-active.svg" alt="mine">
        <div :style="item.activeStyle" class="item-text">我的</div>
      </template>class
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../common/tabbar/TabBar";
  import TabBarItem from "../common/tabbar/TabBarItem";


  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>