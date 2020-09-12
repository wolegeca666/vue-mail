<template>
  <div class="home">
    <nav-bar class="home-nav"><template v-slot:center>首页</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommend="recommend"></recommend>
    <feature/>
    <tab-control class="tab-control" :title="['流行', '新款', '精选']"/>
    <ul>
      <li>woca1</li>
      <li>woca2</li>
      <li>woca3</li>
      <li>woca4</li>
      <li>woca5</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "../../components/content/TabControl";

  import HomeSwiper from "./childComps/HomeSwiper";
  import Recommend from "./childComps/Recommend";
  import Feature from "./childComps/Feature";

  import HomeData from "network/home";


  export default {
    name: 'Home',
    data() {
      return {
        banners: null,
        recommend: null,
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    methods: {
      getHomeMulidata() {
        HomeData.getMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      }
    },
    components: {
      NavBar,
      TabControl,

      HomeSwiper,
      Recommend,
      Feature
    },
    created() {
      this.getHomeMulidata();
    },
  }
</script>

<style>
  .home {
    padding-top: 44px;
  }

  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>