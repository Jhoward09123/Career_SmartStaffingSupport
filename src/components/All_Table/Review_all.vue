<script setup>
import { RouterLink, RouterView } from "vue-router";
import Big_table_review from "../All_Table/big_table/Big_table_review_usa.vue";

</script>

<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <div class="shadow border">
      <div class="l-navbar" id="nav-bar">
        <nav class="nav_as">
      <div>
        <div class="nav_list">
          <RouterLink class="nav_link py-2" to="/Dashboard">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Dashboard</span></RouterLink
          >
          <RouterLink class="nav_link py-2" to="/Review">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">
              Review
              <span class="notification">2</span>
            </span>
          </RouterLink>
          <RouterLink class="nav_link py-2" to="/Applicants">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Applicants</span></RouterLink
          >
          <RouterLink class="nav_link py-2" to="/Schedule">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Schedule</span></RouterLink
          >
          <RouterLink class="nav_link py-2" to="/Interview">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Interview</span></RouterLink
          >
          <div class="btn_logout_hold mb-3">
            <button
              @click="authStore.handleLogOut"
              class="nav_name btn_sidebar"
            >
              Job Management
            </button>
          </div>

          <RouterLink class="nav_link py-2" to="/SkillAssesment">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Skill Assesment</span></RouterLink
          >
          <div class="border_space_20margin"></div>
          <div class="btn_logout_hold margin_top">
            <button @click="authStore.handleLogOut" class="nav_name btn_logout">
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
      </div>
    </div>

    <div class="main_content height-100 bg-white">
      <div class="review">All APPLICANTS DASHBOARD</div>

      <!-- table here -->
      <Big_table_review />
    </div>
  </main>
</template>
