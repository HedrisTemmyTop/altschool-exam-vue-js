<template>
  <div class="repos">
    <div class="Links">
      <router-link to="overview" class="Link Active">
        <div>Overview</div>
      </router-link>
      <router-link to="repository" class="Link">
        <div class="block">
          <div>All Repositories</div>
          <span class="span"> 20 </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.repos {
  margin-top: 4rem;
  background-color: var(--box-color);
  margin-bottom: 2rem;
}
.Links {
  display: flex;
  align-items: center;
}
.Link {
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  color: var(--text-color);
}
.Active {
  border-bottom: 2px solid var(--white);
}
.Repositories {
  background-color: var(--box-color);
  padding: 2rem 4rem;
  border-radius: 2rem;
}

.block {
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.span {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 50%;
  color: white;
  margin-left: 1rem;
}
</style>
