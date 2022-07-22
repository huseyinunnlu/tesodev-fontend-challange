<script setup>
import { watch, ref, defineEmits } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref(route?.query?.keyword || null);
const emit = defineEmits(["search"]);

watch(keyword, (value) => {
  emit("search", value);
});
</script>
<template>
  <div class="search-input">
    <i class="fas fa-search search-icon"></i>
    <input type="text" v-model="keyword" />
    <button
      @click="
        keyword?.length > 2 &&
          $router.push({
            name: 'results',
            query: { ...route.query, keyword: keyword },
          })
      "
      :disabled="keyword?.length < 3 && true"
      class="btn"
    >
      Search
    </button>
  </div>
</template>
