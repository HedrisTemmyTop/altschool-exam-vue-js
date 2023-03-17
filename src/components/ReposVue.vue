<template>
  <div class="Box">
    <div class="BoxLink">
      <div class="BoxContent">
        <div class="Link">{{ this.repo.name }}</div>
        <div class="Type">visible</div>
      </div>
      <div class="AboutRepo">
        <a :href="this.repo.html_url" class="Cap" target="_blank">
          <button class="Button Green">Live Link</button>
        </a>
        <router-link :to="'/repo/' + this.repo.id" class="RepoDetails">
          <button class="Button Blue">About</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: {},
  },
};
</script>

<style>
.Overview {
  background-color: var(--box-color);
  padding: 2rem;
  border-radius: 2rem;
  margin-bottom: 14rem;
}
.Box {
  padding: 2rem;
  background-color: var(--input-color);
  border: 1px solid rgba(238, 238, 238, 0.5);
  margin-top: 2rem;
  border-radius: 2rem;
}
.BoxContent {
  display: flex;
  align-items: center;
}
.Type {
  margin-left: 2rem;
  border: 1px solid rgba(238, 238, 238, 0.5);
  box-sizing: border-box;
  border-radius: 37%;
  font-size: 1.4rem;
  width: 5rem;
  text-align: center;
  height: 2.3rem;
}
.Link {
  font-weight: 600;
  color: #1e74fd;
}
.Button {
  height: 4rem;
  border-radius: 1rem;
  border: 0;
  color: var(--white);
  width: 8rem;
  margin-right: 1rem;
}
.Button a {
  color: inherit;
}
.Green {
  background-color: var(--button-color);
}
.Blue {
  background-color: #1e74fd;
}

.AboutRepo {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
}
.BoxLink {
  text-decoration: none;
  color: inherit;
}
@media only screen and (max-width: 700px) {
  .Special {
    flex-direction: column;
  }
}
@media only screen and (max-width: 860px) {
  .Overview {
    margin-bottom: 0rem;
  }
}
</style>
