<script setup></script>

<template>
  <notifications />
  <router-view :key="$route.fullPath"></router-view>
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
