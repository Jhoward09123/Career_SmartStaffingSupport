import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DashBoard from "../views/DashBoard.vue";
import Applicants from "../components/Dashboard_items/Applicants.vue";
import Interview from "../components/Dashboard_items/Interview.vue";
import Schedule from "../components/Dashboard_items/Schedule.vue";

import SkillAssesment from "../components/Dashboard_items/SkillAssesment.vue";
import Login from "../components/Login.vue";
import Review from "../components/Dashboard_items/Review.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_API_URL),
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

      component: () => import("../components/Login.vue"),
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

      component: () =>
        import("../components/Dashboard_items/SkillAssesment.vue"),
    },

    {
      path: "/Review",
      name: "Review",

      component: () => import("../components/Dashboard_items/Review.vue"),
    },

    {
      path: "/Review/Review_view_table",
      name: "view_table",

      component: () => import("../components/All_Table/Review_all.vue"),
    },

    {
      path: "/Sign_up",
      name: "Sign_up",

      component: () => import("../components/Sign_up_Admin.vue"),
    },

    {
      path: "/Review/Big_table_phil",
      name: "Big_table_phil",

      component: () =>
        import("../components/All_Table/big_table/Big_table_phil.vue"),
    },

    {
      path: "/Review/Big_table_kenya",
      name: "Big_table_kenya",

      component: () =>
        import("../components/All_Table/big_table/Big_table_kenya.vue"),
    },

    {
      path: "/Review/Review_usa_info",
      name: "Review_usa_info",

      component: () =>
        import("../components/review_info/Review_usa_info.vue"),
    },
  ],
});

export default router;
