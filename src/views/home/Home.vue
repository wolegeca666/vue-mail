<template>
  <div class="home">
    <nav-bar class="home-nav"><template v-slot:center>首页</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommend="recommend"></recommend>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import Recommend from "./childComps/Recommend";

  import HomeData from "network/home";


  export default {
    name: 'Home',
    data() {
      return {
        banners: null,
        recommend: null
      }
    },
    methods: {

    },
    components: {
      NavBar,
      HomeSwiper,
      Recommend
    },
    created() {
      HomeData.getMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    }
  }
</script>

<style>
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>