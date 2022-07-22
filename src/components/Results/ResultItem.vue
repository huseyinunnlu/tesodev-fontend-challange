<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
</script>
<template>
  <div class="result-item">
    <div class="result-item-contanier">
      <div class="result-item-user-info">
        <i class="far fa-user user-icon"></i>
        <div class="user">
          <span class="full-name">Hüseyin Ünlü</span>
          <span class="location">HDenizli Çardak</span>
        </div>
      </div>
      <div class="result-item-company-info">
        <span class="company">Test Company</span>
        <span class="date">01/08/2021</span>
      </div>
    </div>
  </div>
</template>
