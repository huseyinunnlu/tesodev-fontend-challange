<script setup>
import SearchInput from "@/components/Index/SearchInput.vue";
</script>
<template>
  <header class="header-result">
    <nav>
      <img src="/media/logo.png" alt="logo" />
      <SearchInput />
    </nav>
    <router-link to="/" class="btn">Add new record</router-link>
  </header>
</template>
