<script setup>
import ResultItem from "./ResultItem.vue";
import { useDataStore } from "@/store/Data";

const dataStore = useDataStore();
</script>
<template>
  <div class="search-results" v-if="dataStore.autocompleteData.length > 0">
    <ResultItem
      v-for="(item, index) in dataStore.autocompleteData"
      :key="index"
      :data="item"
    />
    <div class="search-actions">
      <router-link to="/">Show more...</router-link>
    </div>
  </div>
</template>
