<script setup>
import { useResultStore } from "@/store/Result";
import { useRoute, useRouter } from "vue-router";

const resultStore = useResultStore();
const route = useRoute();
const router = useRouter();

const handleClick = (pageNumber) => {
  router.push({
    query: { ...route?.query, page: pageNumber },
  });
};
</script>
<template>
  <div class="pagination">
    <button
      class="pagination-item"
      @click="handleClick(resultStore?.pagination?.prev)"
    >
      Previous
    </button>
    <button
      v-for="(item, index) in resultStore?.pagination?.data"
      :key="index"
      @click="handleClick(index + 1)"
      class="pagination-item"
      :class="index + 1 == $route.query.page && 'active'"
    >
      {{ index + 1 }}
    </button>

    <button
      class="pagination-item"
      @click="handleClick(resultStore?.pagination?.next)"
    >
      Next
    </button>
  </div>
</template>
