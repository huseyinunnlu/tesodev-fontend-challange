<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const sortItems = [
  {
    type: "nameSurname-asc",
    label: "Name ascending",
  },
  {
    type: "nameSurname-desc",
    label: "Name descending",
  },
  {
    type: "date-asc",
    label: "Year asencing",
  },
  {
    type: "date-desc",
    label: "Year descending",
  },
];

const sort = (sortType) => {
  router.push({
    query: { ...route.query, ...{ sort: sortType } },
  });
};
</script>
<template>
  <div class="sort-dropdown">
    <span class="toggler"><i class="fas fa-sort"></i> Order By</span>
    <ul class="dropdown">
      <li
        class="dropdown-item"
        :class="route?.query?.sort === item.type ? 'active' : ''"
        @click="sort(item.type)"
        v-for="(item, index) in sortItems"
        :key="index"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
