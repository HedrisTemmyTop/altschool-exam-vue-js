<template>
  <div class="Home">
    <div v-if="error"><ErrorHandler :errorMessage="error" /></div>
    <div v-for="repo in paginatedRepos" :key="repo.id">
      <ReposVue :repo="repo" />
    </div>
    <div class="pagination">
      <button v-if="page > 1" @click="page--">Prev</button>

      <button v-if="page < pageCount" @click="page++">Next</button>
    </div>
  </div>
</template>

<script>
import ReposVue from "@/components/ReposVue.vue";
import ErrorHandler from "@/components/ErrorHandler.vue";
import { onMounted, ref, computed } from "vue";

export default {
  components: {
    ReposVue,
    ErrorHandler,
  },
  setup() {
    // FETCH REPOS
    const repos = ref([]);
    const page = ref(1);
    const error = ref(null);
    const pageSize = 5;
    onMounted(async () => {
      const response = await fetch(
        "https://api.github.com/users/HedrisTemmyTop/repos"
      );
      const data = await response.json();
      if (response.ok) {
        repos.value = data;
      }

      error.value = data.message;
    });

    const paginatedRepos = computed(() => {
      const startIndex = (page.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return repos.value.slice(startIndex, endIndex);
    });

    const pageCount = computed(() => {
      return Math.ceil(repos.value.length / pageSize);
    });

    const pages = computed(() => {
      const pagesArray = [];
      for (let i = 1; i <= pageCount.value; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    });

    return {
      paginatedRepos,
      page,
      pages,
      pageCount,
      repos,
      error,
    };
  },
};
</script>

<style scoped>
.SearchBtn {
  background-color: var(--button-color);
  width: 10rem;
  border: 0;
  margin-left: 1.5rem;
  cursor: pointer;
  font-size: 1.4rem;

  height: 4rem;
  border-radius: 1rem;
  color: var(--white);
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.pagination button {
  margin: 0 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 1.2rem 2.4rem;
  color: #333;
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 0.5rem;
}

.pagination button:hover {
  background-color: #ccc;
}

.UserImage {
  width: 5rem;
  height: 5rem;
  margin-right: 1.5rem;
  border-radius: 50%;
}
.Home {
  flex-basis: 50%;
  display: block;
}
@media only screen and (max-width: 1000px) {
  .Home {
    flex-basis: 60%;
  }
}
.Search {
  background-color: var(--box-color);
  padding: 2rem;
  display: flex;

  align-items: center;
  border-radius: 1rem;
}
.Search input {
  width: 80%;
  border: 0;
  height: 4rem;
  padding-left: 2rem;
  color: var(--white);
  box-sizing: border-box;
  font-size: 1.4rem;
  background-color: var(--input-color);
  outline: none;
  transition: all 0.2s;
  margin: 0 auto;
  border-radius: 0.3rem;
}
.Search input:focus {
  color: var(--white);
  border: 0;
  outline: none;
}
.Search input::placeholder {
  color: var(--white);
}
</style>
