<template>
  <aside class="Aside">
    <div class="Head">Menu</div>
    <nav class="Nav">
      <router-link class="Link" to="/">
        <div>Homepage</div>
      </router-link>
      <router-link class="Link" to="/about">
        <div>About</div>
      </router-link>
      <router-link class="Link" to="/privacy">
        <div>Privacy & Policy</div>
      </router-link>

      <router-link class="Link" to="/help">
        <div>Help</div>
      </router-link>
      <router-link class="Link" to="/error-page">
        <div>Error page</div>
      </router-link>

      <router-link class="Link" to="/terms&conditions">
        <div>Terms & Condition</div>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.Aside {
  position: sticky;
  top: 14rem;
  background-color: var(--box-color);
  padding: 2rem 0;
  min-width: 30rem;
  border-radius: 2rem;
  height: 50rem;
  box-sizing: border-box;
}
.Head {
  margin-left: 4rem;
}
.Nav {
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
}

.Link {
  width: 100%;
  text-decoration: none;
  color: var(--white);
  padding: 0 4rem;
  box-sizing: border-box;
  align-self: center;
  margin-bottom: 1.5rem;
  height: 4rem;
  position: relative;
  display: flex;
  transition: all 0.2s;
  align-items: center;
}
.Link:hover,
.active {
  background-color: var(--input-color);
}
.Link:hover::after,
.active::after {
  content: "";
  background-color: var(--button-color);
  width: 6px;
  display: block;
  border-radius: 2px;
  right: 0;
  position: absolute;
  height: 100%;
}
@media only screen and (max-width: 1000px) {
  .Aside {
    display: none;
  }
}
</style>
