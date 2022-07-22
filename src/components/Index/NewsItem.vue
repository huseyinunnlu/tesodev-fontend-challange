<script setup>
import { formatDate } from "@/core/helpers";
const props = defineProps(["data"]);
</script>
<template>
  <div class="card carousel__item">
    <img src="/media/news-banner.png" alt="news" />
    <span class="card-title">{{ props.data.title }}</span>
    <span class="author"
      >{{ formatDate("2002-06-10 10:09") }} * by Troy Corison</span
    >
  </div>
</template>
