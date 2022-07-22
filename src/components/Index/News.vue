<script setup>
import NewsItem from "./NewsItem.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useDataStore } from "@/store/Data";
import { computed, onMounted, ref } from "@vue/runtime-core";

const dataStore = useDataStore();
const itemCount = ref(3);
onMounted(() => {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
      itemCount.value = 3;
    } else if (window.innerWidth >= 500) {
      itemCount.value = 2;
    } else {
      itemCount.value = 1;
    }
  });
});
</script>
<template>
  <section class="news">
    <h3 class="title">Top News</h3>
    <div class="news-cards">
      <carousel :itemsToShow="itemCount">
        <slide v-for="(item, index) in dataStore.news" :key="index"
          ><NewsItem :data="item"
        /></slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </section>
</template>
<style>
.carousel__prev,
.carousel__next {
  background-color: #eee !important;
  color: #999;
  width: 50px;
  height: 50px;
  transform: translate(0, -100%);
}
</style>
