<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item" :isActive="isActive" :activeStyle="activeStyle"></slot>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#1296db'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path)
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        if(this.path !== this.$route.path) {
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 14px;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    margin: 3px auto;
    width: 24px;
    height: 24px;
  }
</style>