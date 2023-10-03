import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DashBoard from "../views/DashBoard.vue";
import Applicants from "../components/Dashboard_items/Applicants.vue";
import Interview from "../components/Dashboard_items/Interview.vue";
import Schedule from "../components/Dashboard_items/Schedule.vue";

import SkillAssesment from "../components/Dashboard_items/SkillAssesment.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "Login",

      component: () => import("../views/Login.vue"),
    },

    {
      path: "/DashBoard",
      name: "DashBoard",

      component: () => import("../views/DashBoard.vue"),
    },

    {
      path: "/Applicants",
      name: "Applicants",

      component: () => import("../components/Dashboard_items/Applicants.vue"),
    },
    {
      path: "/Interview",
      name: "Interview",

      component: () => import("../components/Dashboard_items/Interview.vue"),
    },

    {
      path: "/Schedule",
      name: "Schedule",

      component: () => import("../components/Dashboard_items/Schedule.vue"),
    },

    {
      path: "/SkillAssesment",
      name: "SkillAssesment",

      component: () => import("../components/Dashboard_items/SkillAssesment.vue"),
    },
  ],
});

export default router;
