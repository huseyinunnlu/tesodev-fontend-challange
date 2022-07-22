import { notify } from "@kyvg/vue3-notification";
let errorCount = 0;

export const checkValidation = (form, rules) => {
  let errors = [];
  let messages = [];

  Object.entries(rules).forEach(([key, value]) => {
    value.rules.split("|").forEach((item) => {
      const message = getValidationFunction(item, form[key], value.label);
      if (message) {
        errors.push(key);
        messages[key] = message;
      }
    });
  });

  return [errors, messages];
};

const getValidationFunction = (rule, value, label) => {
  let message = null;
  let [ruleName, ruleValue] = rule.split(":");
  switch (ruleName) {
    case "required":
      message = required(value, label);
      break;
    case "letters":
      message = letters(value, label);
      break;
    case "email":
      message = email(value, label);
      break;
    case "min":
      message = min(value, ruleValue, label);
      break;
    case "max":
      message = max(value, ruleValue, label);
      break;
  }

  return message;
};

const required = (value, label) => {
  if (!value) {
    let message = `The ${label} field is required`;
    runNotify(message);
    return message;
  }
};

const letters = (value, label) => {
  if (!value?.match(/^[A-Za-z ]+$/)) {
    let message = `The ${label} field may only contain alphabetic characters`;
    runNotify(message);
    return message;
  }
};

const email = (value, label) => {
  if (
    !value?.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    let message = `The ${label} field must be a valid email`;
    runNotify(message);
    return message;
  }
};

const min = (value, ruleValue, label) => {
  if (value?.length < ruleValue) {
    let message = `The ${label} field must be at least ${ruleValue} characters`;
    runNotify(message);
    return message;
  }
};

const max = (value, ruleValue, label) => {
  if (value?.length > ruleValue) {
    let message = `The ${label} field may not be greater than ${ruleValue} characters`;
    runNotify(message);
    return message;
  }
};

const runNotify = (messageType) => {
  notify({
    type: "error",
    text: messageType,
  });
};
