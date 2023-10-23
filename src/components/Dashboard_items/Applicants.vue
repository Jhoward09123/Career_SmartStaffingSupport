<script setup>
import { RouterLink, RouterView } from "vue-router";

import Table_review from "@/Tables/Table_review.vue";
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
      <div class="review">APPLICANTS DASHBOARD</div>
      <div class="cards_hold flex d-flex justify-content-left gap-5 pt-3">
        <div class="usa_card_review shadow">
          <router-link to="/Review">
            <div class="image_circle pb-3">
              <img :src="usa_circle" alt="User Image" />
            </div>
            <div class="country_title">USA</div>
            <div class="new_app pt-2">
              <div class="">Applicants: <b>1</b></div>
            </div>
          </router-link>
        </div>
        <div class="philippines_card_review shadow">
          <router-link to="/Review">
            <div class="image_circle pb-3">
              <img :src="philipine_circle" alt="User Image" />
            </div>
            <div class="country_title">PHILIPPINES</div>
            <div class="new_app pt-2">
              <div class="">Applicants: <b>18</b></div>
            </div>
          </router-link>
        </div>
        <div class="Kenya_card_review shadow">
          <router-link to="/Review">
            <div class="image_circle pb-3">
              <img :src="kenya_circle" alt="User Image" />
            </div>
            <div class="country_title">KENYA</div>
            <div class="new_app pt-2">
              <div class="">Applicants: <b>18</b></div>
            </div>
          </router-link>
        </div>
        <div class="Lebanon_card_review shadow">
          <router-link to="/Review">
            <div class="image_circle pb-3">
              <img :src="lebanon_circle" alt="User Image" />
            </div>
            <div class="country_title">LEBANON</div>
            <div class="new_app pt-2">
              <div class="">Applicants: <b>18</b></div>
            </div>
          </router-link>
        </div>
      </div>
      <!-- table here -->
     
    </div>
  </main>
</template>

<script>
import kenya_circle from "@/assets/Images/flag_circle/kenya circle.png";
import lebanon_circle from "@/assets/Images/flag_circle/lebanon_circle.png";
import philipine_circle from "@/assets/Images/flag_circle/philipine_circle.png";
import usa_circle from "@/assets/Images/flag_circle/usa_circle.png";

//table
import Table_application from '@/Tables/Table_application.vue'
</script>

<style></style>
