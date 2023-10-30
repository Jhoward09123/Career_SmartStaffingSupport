import { createRouter, createWebHistory } from "vue-router";

import axios from "axios";
import { nextTick } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_API_URL),
  routes: [
    //Job Management

    {
      path: "/Job_Management",
      name: "Job_Management",

      meta: {
        requireLogIn: true,
      },

      component: () =>
        import("@/components/Dashboard_items/Job_Management.vue"),
    },

    {
      path: "/Job_Management_View_all",
      name: "Job_Management_View_all",
      meta: {
        requireLogin: true,
      },
      component: () => import("@/components/Job_Management/View_all.vue"),
    },
    {
      path: "/Job_Management_Add_Job",
      name: "Job_Management_Add_Job",
      meta: {
        requireLogin: true,
      },
      component: () => import("@/components/Job_Management/Add_Job.vue"),
    },

    {
      path: "/",
      name: "/",
      meta: {
        requireLogin: true,
      },
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/home",
      name: "home",
      meta: {
        requireLogin: true,
      },
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: {
        requireLogIn: true,
      },

      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        redirectIfLoggedIn: true,
      },

      component: () => import("@/components/Login.vue"),
    },

    {
      path: "/DashBoard",
      name: "DashBoard",
      meta: {
        requireLogIn: true,
      },

      component: () => import("@/views/DashBoard.vue"),
    },

    //Dashboard items

    {
      path: "/Applicants",
      name: "Applicants",

      meta: {
        requireLogIn: true,
      },

      component: () => import("@/components/Dashboard_items/Applicants.vue"),
    },
    {
      path: "/Interview",
      name: "Interview",

      meta: {
        requireLogIn: true,
      },

      component: () => import("@/components/Dashboard_items/Interview.vue"),
    },

    {
      path: "/Schedule",
      name: "Schedule",
      meta: {
        requireLogIn: true,
      },

      component: () => import("@/components/Dashboard_items/Schedule.vue"),
    },

    {
      path: "/SkillAssesment",
      name: "SkillAssesment",
      meta: {
        requireLogIn: true,
      },

      component: () =>
        import("@/components/Dashboard_items/SkillAssesment.vue"),
    },

    {
      path: "/Review",
      name: "Review",

      meta: {
        requireLogIn: true,
      },

      component: () => import("@/components/Dashboard_items/Review.vue"),
    },

    //All table view all table

    {
      path: "/Review/Review_view_table",
      name: "view_table",
      meta: {
        requireLogIn: true,
      },

      component: () => import("@/components/All_Table/Review_all.vue"),
    },

    {
      path: "/Review/Review_all_usa",
      name: "Review_all_usa",
      meta: {
        requireLogIn: true,
      },

      component: () => import("@/components/All_Table/Review_all.vue"),
    },

    {
      path: "/Sign_up",
      name: "Sign_up",
      meta: {
        redirectIfLoggedIn: true,
      },
      component: () => import("@/components/Sign_up.vue"),
    },

    {
      path: "/Review/Big_table_phil",
      name: "Big_table_phil",

      component: () =>
        import("@/components/All_Table/big_table/Big_table_phil.vue"),
    },

    {
      path: "/Review/Big_table_kenya",
      name: "Big_table_kenya",

      component: () =>
        import("@/components/All_Table/big_table/Big_table_kenya.vue"),
    },

    {
      path: "/Review/Big_table_lebanon",
      name: "Big_table_lebanon",

      component: () =>
        import("@/components/All_Table/big_table/Big_table_lebanon.vue"),
    },

    {
      path: "/Review/Review_usa_info",
      name: "Review_usa_info",

      component: () => import("@/components/review_info/Review_usa_info.vue"),
    },
  ],
});

router.beforeEach(async (to, _, next) => {
  let is_loggedIn = false;

  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axios.get("api/user");

    console.log(res);
    is_loggedIn = true;
  } catch (error) {
    is_loggedIn = false;
  } finally {
  }

  if (!is_loggedIn && to.meta.requireLogin == true) {
    return next({ name: "Login" });
  }

  if (to.meta.redirectIfLoggedIn && is_loggedIn) {
    next({ name: "home" });
  }

  return next();
});

router.afterEach(() => {
  nextTick(() => {});
});

export default router;
