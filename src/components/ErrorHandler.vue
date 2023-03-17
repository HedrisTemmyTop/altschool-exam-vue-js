<template>
  <div class="error">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.error {
  background-color: red;
  color: white;
  padding: 10px;
}
</style>
