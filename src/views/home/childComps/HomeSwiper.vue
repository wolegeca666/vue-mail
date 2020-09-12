<template>
  <swiper>
    <template v-slot:swiper="item">
      <swiper-item v-for="item in banners" :style="item.swiperStyle">
        <a :href="item.link">
          <img :src="item.image" alt="图没了">
        </a>
      </swiper-item>
    </template>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,SwiperItem
    }
  }
</script>

<style scoped>

</style>