<script setup>
import { ref } from "vue";
import { RouterView, useRouter, RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const router = useRouter();
</script>

<template>
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
            <RouterLink class="" to="/Job_Management">
              <button @click="" class="nav_name btn_sidebar">
                Job Management
              </button>
            </RouterLink>
          </div>

          <RouterLink class="nav_link py-2" to="/SkillAssesment">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Skill Assesment</span></RouterLink
          >
          <div class="border_space_20margin"></div>
          <div class="btn_logout_hold margin_top">
            <button @click="authStore.handleLogOut" class="btn btn-dark nav_name btn_logout">
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.btn_sidebar {
  background-color: transparent;
  border-style: none;
}

.border_space_20margin {
  border-top: 1px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn_logout_hold {
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn_logout {
  background-color: white;
  border-style: none;
  padding: 10px 20px;
  background-color: gray;
  color: #fff;
  border-radius: 10px;
}
.nav_name {
  display: flex;
  align-items: center;
  position: relative;
}

.notification {
  background-color: red; /* Set your desired background color */
  color: white; /* Set your desired text color */
  border-radius: 50%; /* To make it a circle */
  padding: 0px 8px; /* Adjust padding as needed */
  margin-left: 4px; /* Adjust the distance from the text */
  font-size: 15px;
  margin-bottom: 10px;
}
.nav_link.active-link {
  background-color: #000;
  color: white;
}

.main_content {
  width: 100%;
}

.l-navbar {
  background-color: #ffffff;
  color: #fff;
  width: 250px;
  height: 900px;
  overflow-y: auto;
}

.nav_logo {
  display: flex;
  align-items: center;
  padding: 20px 25px;
}

.nav_logo-icon {
  font-size: 24px;

  margin-right: 10px;
}

.nav_logo-name {
  font-size: 20px;
  font-weight: bold;
}

.nav_list {
  padding: 20px 25px;
}

.nav_link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: #000;
  text-decoration: none;
}

.nav_icon {
  font-size: 24px;
  margin-right: 10px;
}

.nav_name {
  font-size: 18px;
  font-weight: 500;
}

.active {
  padding-left: 21px;
}

/* Main Content Styles */
.height-100 {
  height: 100vh;
}

.bg-light {
  background-color: #f8f9fa;
}

/* Toggle Sidebar Button (if needed) */
.d-flex {
  display: flex;
}
</style>
