import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RepoVue from "../components/RepoVue.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/repo/:id",
    name: "repo",
    component: RepoVue,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("../views/PrivacyView.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import("../views/HelpView.vue"),
  },
  {
    path: "/terms&conditions",
    name: "terms",
    component: () => import("../views/TermsCondition.vue"),
  },
  {
    path: "/error-page",
    name: "error page",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
