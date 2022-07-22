<script setup>
import { reactive } from "@vue/reactivity";
import { useResultStore } from "@/store/Result";
import { useRouter } from "vue-router";

const resultStore = useResultStore();
const router = useRouter();

const form = reactive({
  nameSurname: null,
  country: null,
  city: null,
  email: null,
});

const createData = () => {
  resultStore.addItem(form);
  router.push("/");
};
</script>
<template>
  <div class="container add-item">
    <header>
      <img src="/media/logo.png" alt="logo" />
      <button @click="$router.back()" class="return-link">
        <i class="fas fa-arrow-left"></i> Return to List Page
      </button>
    </header>
    <form @submit.prevent="createData">
      <Input
        v-model="form.nameSurname"
        label="Name Surname"
        placeholder="Enter name and surname"
        name="namesurname"
      />
      <Input
        v-model="form.country"
        label="Country"
        placeholder="Country"
        name="country"
      />
      <Input v-model="form.city" label="City" placeholder="City" name="city" />
      <Input
        v-model="form.email"
        label="Email"
        placeholder="Email"
        name="email"
      />
      <button type="submit" class="btn add-btn">Add</button>
    </form>
  </div>
</template>
