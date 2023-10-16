<script setup>
import { RouterLink, RouterView } from "vue-router";

import Table_review from "../Tables/Table_review.vue";
</script>

<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <div class="shadow border">
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
          <div>
            <div class="nav_list">
              <RouterLink class="nav_link py-2" to="/Dashboard">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Dashboard</span></RouterLink
              >
              <RouterLink class="nav_link py-2" to="/Review">
                <i class="bx bx-grid-alt nav_icon"></i
                ><span class="nav_name">Review</span>
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

              <RouterLink class="nav_link py-2" to="/SkillAssesment">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Skill Assestment</span></RouterLink
              >
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main_content height-100 bg-white">
      <div class="review">All APPLICANTS DASHBOARD</div>

      <!-- table here -->
      <Big_table_review />
    </div>
  </main>
</template>

<script>
import Big_table_review from "./big_table/Big_table_review.vue";
import kenya_circle from "@/assets/Images/flag_circle/kenya circle.png";
import lebanon_circle from "@/assets/Images/flag_circle/lebanon_circle.png";
import philipine_circle from "@/assets/Images/flag_circle/philipine_circle.png";
import usa_circle from "@/assets/Images/flag_circle/usa_circle.png";
</script>

<style></style>
