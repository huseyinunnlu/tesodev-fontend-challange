<script setup>
import ResultItem from "./ResultItem.vue";
import { defineProps } from "vue";
import { useDataStore } from "@/store/Data";
const props = defineProps(["searchValue"]);
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
      <router-link
        :to="{
          name: 'results',
          query: { keyword: searchValue },
        }"
        >Show more...</router-link
      >
    </div>
  </div>
</template>
