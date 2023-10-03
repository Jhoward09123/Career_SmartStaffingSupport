<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <div class="l-navbar" id="nav-bar">
    <nav class="nav">
      <div>
        <div class="nav_list">
          <RouterLink class="nav_link" to="/Dashboard">
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">Dashboard</span></RouterLink
          >
          <a href="#" class="nav_link">
            <i class="bx bx-user nav_icon"></i>
            <span class="nav_name">Applicants</span>
          </a>
          <a href="#" class="nav_link">
            <i class="bx bx-message-square-detail nav_icon"></i>
            <span class="nav_name">Schedule</span>
          </a>
          <a href="#" class="nav_link">
            <i class="bx bx-bookmark nav_icon"></i>
            <span class="nav_name">Interview</span>
          </a>
          <a href="#" class="nav_link">
            <i class="bx bx-folder nav_icon"></i>
            <span class="nav_name">Skill Assestment</span>
          </a>
        </div>
      </div>
    </nav>
  </div>
 
</template>

<style>
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
  height: auto;
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
