<template>
  <div class="container">
    <h2>{{ repo.name }}</h2>
    <p>{{ repo.description }}</p>
    <p><a :href="repo.html_url" target="_blank">View on GitHub</a></p>
  </div>
</template>

<script>
export default {
  name: "Repo",
  data() {
    return {
      repo: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const response = await fetch(`https://api.github.com/repositories/${id}`);

    this.repo = await response.json();
    console.log(this.repo);
  },
};
</script>
<style scoped>
.container {
  background-color: white;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  border-radius: 1rem;
  color: black;
  box-sizing: border-box;
}
</style>
