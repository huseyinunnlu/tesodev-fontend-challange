<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
</script>
<template>
  <div class="result-item">
    <i class="far fa-user icon"></i>
    <div class="item-content">
      <span class="full-name">{{ props.data.nameSurname }}</span>
      <span class="location">{{ props.data.country }}</span>
    </div>
  </div>
</template>
