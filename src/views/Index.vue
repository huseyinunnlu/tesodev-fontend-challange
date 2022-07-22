<script setup>
import Header from "@/components/Layout/Header.vue";
import Search from "@/components/Index/Search.vue";
import News from "@/components/Index/News.vue";
import Footer from "@/components/Layout/Footer.vue";
</script>
<template>
  <Header />
  <div class="container main-page">
    <Search />
    <News />
  </div>
  <Footer />
</template>
