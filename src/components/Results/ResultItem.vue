<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
</script>
<template>
  <div class="result-item">
    <div class="result-item-container">
      <div class="result-item-user-info">
        <i class="far fa-user user-icon"></i>
        <div class="user">
          <span class="full-name">{{ data.nameSurname }}</span>
          <span class="location">{{
            `${data.city} &#xb7; ${data.country}`
          }}</span>
        </div>
      </div>
      <div class="result-item-company-info">
        <span class="company">{{ data.company }}</span>
        <span class="date">{{ data.date }}</span>
      </div>
    </div>
  </div>
</template>
