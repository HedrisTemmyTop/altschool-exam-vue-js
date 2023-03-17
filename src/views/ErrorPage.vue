<template>
  <div>
    <div v-if="error"><ErrorHandler :errorMessage="error" /></div>
    <button @click="errorHanler" v-else>Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";
import ErrorHandler from "@/components/ErrorHandler.vue";
export default {
  name: "Error paga",
  components: {
    ErrorHandler,
  },
  setup() {
    const error = ref(null);

    const errorHanler = () => {
      error.value = "Something went wrong";
    };
    return { errorHanler, error };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
}
</style>
