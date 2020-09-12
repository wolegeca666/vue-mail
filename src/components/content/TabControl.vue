<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" class="tab-control-item" @click="itemClick(index)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item .active {
    color: var(--color-tint);
  }

  .tab-control-item span {
    padding: 5px;
    transition: color 20ms;
  }

  .tab-control-item .active {
    border-bottom: 2px solid var(--color-tint);
  }
</style>