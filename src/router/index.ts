import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PracticeView from "../views/PracticeView.vue";
import AddButtonView from "../views/AddButtonView.vue";
import SlotView from "../views/SlotView.vue";
import ExampleView from "../views/ExampleView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/practice",
    name: "practice",
    component: PracticeView,
  },
  {
    path: "/add-button",
    name: "add-button",
    component: AddButtonView,
  },
  {
    path: "/slot",
    name: "slot",
    component: SlotView,
  },
  {
    path: "/example/:id",
    name: "example",
    component: ExampleView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
