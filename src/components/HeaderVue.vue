<template>
  <header class="Header">
    <nav class="Nav">
      <ul class="HeaderList">
        <li class="Menu">
          <ion-icon name="menu"></ion-icon>
        </li>
        <li class="NavItem">TemmyLIT</li>
        <li class="NavItem">
          <router-link to="/" class="Link"> Home </router-link>
        </li>

        <li class="NavItem">
          <router-link to="/" class="Link"> About </router-link>
        </li>
        <li class="NavItem">
          <router-link to="/" class="Link"> Help </router-link>
        </li>

        <li class="NavItem">
          <router-link to="/" class="Link"> Privacy policy </router-link>
        </li>
        <li class="NavItem Search">
          <form class="Form">
            <input type="search" placeholder="Type here to search ..." />
          </form>
        </li>
        <li class="NavItem NavAbout">
          <div class="Image">
            <img :src="this.avatar" alt="user Image" />
          </div>
          <a target="_blank" :href="'https://github.com/' + this.username">
            {{ this.username }}
          </a>
        </li>
      </ul>
    </nav>
    <!-- <Headers style={style} /> -->
  </header>
</template>

<script>
export default {
  props: {
    avatar: {},
    username: {},
  },
  setup() {
    // console.log(this.propName);
  },
  created() {
    console.log("Props:", this.avatar, this.username);
  },
};
</script>

<style scoped>
.Header {
  background-color: var(--box-color);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  margin-bottom: 4rem;
  z-index: 10;
}
.Nav {
  width: 100%;
  box-sizing: border-box;
}
.Search {
  flex-basis: 40%;
}
.Form {
  width: 100%;
  display: flex;
  justify-content: center;
}
.Form input {
  width: 80%;
  border: 0;
  height: 4rem;
  padding-left: 2rem;
  color: var(--white);
  box-sizing: border-box;
  font-size: 1.6rem;
  background-color: var(--input-color);
  outline: none;
  transition: all 0.2s;
  margin: 0 auto;
  border-radius: 0.3rem;
}
.Form input:focus {
  color: var(--white);
  border: 0;
  outline: none;
  width: 85%;
}
.Form input::placeholder {
  color: var(--white);
}
.HeaderList {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Link {
  text-decoration: none;
  color: var(--text-color);
}
.Image {
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 2rem;
}
.Image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.NavAbout {
  display: flex;
  align-items: center;
}
.Menu {
  font-size: 3rem;
  display: none;
  align-self: center;
  transform: translateY(0.3rem);
}

@media only screen and (max-width: 1000px) {
  .Link,
  .Form {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  .Menu {
    display: block;
  }
  .Logo {
    left: 40%;
    display: none;
    transform: translateX(-50%);
    position: absolute;
  }
}
@media only screen and (max-width: 412px) {
  .Image {
    margin-right: 0.5rem;
  }
  .Header {
    padding: 0.5rem 2rem;
  }
  .Menu {
    transform: translateX(-1rem);
  }
}
</style>
