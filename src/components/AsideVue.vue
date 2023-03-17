<template>
  <aside class="Aside">
    <div class="Stats">
      <h2>Statistics</h2>
      <div class="Box">
        <ion-icon name="contacts"></ion-icon>
        <div>
          <div class="Caption">Followers</div>
          <div>{{ this.followers }}</div>
        </div>
      </div>
      <div class="Box">
        <ion-icon name="contact"></ion-icon>
        <div>
          <div class="Caption">Following</div>
          <div>{{ this.followed }}</div>
        </div>
      </div>

      <div class="Box">
        <ion-icon name="folder"></ion-icon>
        <div>
          <div class="Caption">Repositories</div>
          <div>{{ 10 }}</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    followers: {},
    followed: {},
  },
  created() {
    console.log(this.followed, this.followers);
  },
};
</script>

<style scoped>
.Stats {
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: var(--box-color);
}
.Aside {
  box-sizing: border-box;
  flex-basis: 20%;
}
.Box {
  display: flex;
  cursor: pointer;
  align-items: center;
}
.Box ion-icon {
  margin-right: 2rem;
  color: white;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: var(--input-color);
  font-size: 3rem;
  margin-bottom: 2rem;
}
@media only screen and (max-width: 1000px) {
  .Aside {
    flex-basis: 30%;
  }
}
@media only screen and (max-width: 860px) {
  .Aside {
    width: 100%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
}
@media only screen and (max-width: 370px) {
  .Stats {
    padding: 1rem;
  }
}
</style>
