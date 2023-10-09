<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="l-navbar" id="nav-bar">
    <nav class="nav">
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

          <RouterLink class="nav_link py-2" to="/SkillAssesment">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Skill Assestment</span></RouterLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
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
