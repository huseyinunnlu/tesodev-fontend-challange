<script setup>
import SearchInput from "@/components/Index/SearchInput.vue";
</script>
<template>
  <header class="header-result">
    <nav>
      <router-link to="/"><img src="/media/logo.png" alt="logo" /></router-link>
      <SearchInput />
    </nav>
    <router-link to="/add" class="btn">Add new record</router-link>
  </header>
</template>
