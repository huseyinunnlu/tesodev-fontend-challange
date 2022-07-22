<script setup>
import { onMounted } from "@vue/runtime-core";
import ResultItem from "./ResultItem.vue";
import Sort from "./Sort.vue";
import Pagination from "./Pagination.vue";
import { useRoute } from "vue-router";
import { useResultStore } from "@/store/Result";
const resultStore = useResultStore();
const route = useRoute();
onMounted(() => {
  const query = route.query;
  resultStore.filter(query);
});
</script>
<template>
  <div class="results-container">
    <div class="search-results">
      <ResultItem
        v-for="(item, index) in resultStore.data"
        :key="index"
        :data="item"
      />
      <Pagination v-if="resultStore.data.length > 3" />
    </div>
    <Sort />
  </div>
</template>
