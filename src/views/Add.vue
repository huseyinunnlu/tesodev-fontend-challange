<script setup>
import { reactive } from "@vue/reactivity";
import { useResultStore } from "@/store/Result";
import { useRouter } from "vue-router";
import { checkValidation } from "@/core/validation";
const resultStore = useResultStore();
const router = useRouter();

const form = reactive({
  nameSurname: null,
  country: null,
  city: null,
  email: null,
});

const validationSchema = {
  nameSurname: {
    label: "Name surname",
    rules: "required|letters|min:4|max:60",
  },
  country: {
    label: "Country",
    rules: "required|letters|min:2|max:40",
  },
  city: {
    label: "City",
    rules: "required|letters|min:2|max:40",
  },
  email: {
    label: "Email",
    rules: "required|email",
  },
};

const createData = () => {
  const status = checkValidation(form, validationSchema);
  console.log(status);
  if (status) {
    resultStore.addItem(form);
    router.push("/");
  }
};
</script>
<template>
  <div class="container add-item">
    <header>
      <router-link to="/"><img src="/media/logo.png" alt="logo" /></router-link>
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
