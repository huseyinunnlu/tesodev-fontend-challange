<script setup>
import SearchInput from "@/components/Index/SearchInput.vue";
import SearchResults from "@/components/Index/SearchResults.vue";
import { useDataStore } from "@/store/Data";

const dataStore = useDataStore();
</script>
<template>
  <section class="search">
    <h3 class="title">Find in records</h3>
    <SearchInput @search="dataStore.filterAutocomplete" />
    <SearchResults />
  </section>
</template>
