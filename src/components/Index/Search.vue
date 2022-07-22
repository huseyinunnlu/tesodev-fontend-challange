<script setup>
import SearchInput from "@/components/Index/SearchInput.vue";
import SearchResults from "@/components/Index/SearchResults.vue";
import { useDataStore } from "@/store/Data";
import { ref } from "@vue/reactivity";

const dataStore = useDataStore();
const search = ref();
const handleSearch = (keyword) => {
  dataStore.filterAutocomplete(keyword);
  search.value = keyword;
};
</script>
<template>
  <section class="search">
    <h3 class="title">Find in records</h3>
    <SearchInput @search="handleSearch" />
    <SearchResults :searchValue="search" />
  </section>
</template>
