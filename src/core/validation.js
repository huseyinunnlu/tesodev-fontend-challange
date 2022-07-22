import { notify } from "@kyvg/vue3-notification";
let errorCount = 0;

export const checkValidation = (form, rules) => {
  let status = true;
  Object.entries(rules).forEach(([key, value]) => {
    value.rules.split("|").forEach((item) => {
      status = getValidationFunction(item, form[key], value.label);
      if (status === false) {
        errorCount++;
      }
    });
  });

  return errorCount > 0 ? false : true;
};

const getValidationFunction = (rule, value, label) => {
  let status = true;
  let [ruleName, ruleValue] = rule.split(":");
  switch (ruleName) {
    case "required":
      status = required(value, label);
      break;
    case "letters":
      status = letters(value, label);
      break;
    case "email":
      status = email(value, label);
      break;
    case "min":
      status = min(value, ruleValue, label);
      break;
    case "max":
      status = max(value, ruleValue, label);
      break;
  }

  return status;
};

const required = (value, label) => {
  if (!value) {
    runNotify(`The ${label} field is required`);
    return false;
  }
};

const letters = (value, label) => {
  if (!value?.match(/^[A-Za-z ]+$/)) {
    runNotify(`The ${label} field may only contain alphabetic characters`);
    return false;
  }
};

const email = (value, label) => {
  if (
    !value?.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    runNotify(`The ${label} field must be a valid email`);
    return false;
  }
};

const min = (value, ruleValue, label) => {
  if (value?.length < ruleValue) {
    runNotify(`The ${label} field must be at least ${ruleValue} characters`);
    return false;
  }
};

const max = (value, ruleValue, label) => {
  if (value?.length > ruleValue) {
    runNotify(
      `The ${label} field may not be greater than ${ruleValue} characters`
    );
    return false;
  }
};

const runNotify = (messageType) => {
  notify({
    type: "error",
    text: messageType,
  });
};
