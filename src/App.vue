<script setup></script>

<template>
  <notifications />
  <router-view :key="$route.fullPath"></router-view>
</template>
