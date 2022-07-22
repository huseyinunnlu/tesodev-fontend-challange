<script setup>
import { ref, watch, defineProps, computed } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: { type: [String, Number], default: null },
  name: { type: String, required: true },
  label: { type: String, default: "" },
  rules: { type: String, default: "" },
  placeholder: { type: String, required: false },
  errorMessage: { type: String, required: false },
  isValid: { type: Boolean, default: true },
});
const data = ref(props.modelValue);

const value = computed(() => {
  return props.modelValue;
});

watch(
  value,
  (value) => {
    data.value = value;
  },
  { immediate: true }
);

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="form-group" :class="isValid && ' error'">
    <label class="form-label" :for="name">{{ label }}</label>
    <input
      type="text"
      :id="name"
      :placeholder="placeholder"
      @input="updateInput"
      :value="value"
    />
    <div class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>
