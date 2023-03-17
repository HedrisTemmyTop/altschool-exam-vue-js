<template>
  <HeaderVue :avatar="imageURL" :username="username" />
  <main class="Layout">
    <SideBar />

    <router-view />

    <AsideVue :followers="followersNo" :followed="followedNo" />
  </main>
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue";
import SideBar from "./components/SideBar.vue";
import HomeView from "./views/HomeView.vue";
import AsideVue from "@/components/AsideVue.vue";
import RepoVue from "@/components/RepoVue.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    HeaderVue,
    HomeView,
    SideBar,
    AsideVue,
    RepoVue,
  },
  setup() {
    const followersNo = ref("0");
    const followedNo = ref("0");
    const imageURL = ref("");
    const username = ref("unknown");
    // FETCH USER DATA
    onMounted(async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/HedrisTemmyTop"
        );
        const data = await response.json();

        console.log(data);
        followersNo.value = data.followers;
        followedNo.value = data.following;
        imageURL.value = data.avatar_url;
        username.value = data.login;
      } catch (error) {
        console.log(error);
      }
    });

    return { followersNo, followedNo, imageURL, username };
  },
};
</script>

<style>
:root {
  --default-background: #1e252b;
  --box-color: #262d35;
  --text-color: #c0c5cb;
  --button-color: #13b164;
  --white: #fff;
  --input-color: #2c353e;
  --default-font: 1.6rem;
}

html {
  font-size: 10px;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  box-sizing: border-box;
  font-size: var(--default-font);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
@media only screen and (max-width: 365px) {
  html {
    font-size: 8px;
  }
}

#app {
  background-color: var(--default-background);
  min-height: 100vh;
  color: var(--text-color);
}
a {
  text-decoration: none;
}

ul {
  list-style: none;
}
.Layout {
  display: flex;
  justify-content: space-around;
}

@media only screen and (max-width: 860px) {
  .Layout {
    padding: 0 2rem;
    flex-direction: column;
  }
}
</style>
