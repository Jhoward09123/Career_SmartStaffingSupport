<script setup>
import info from "@/assets/Images/info.png";
import uncheck_Status from "@/assets/Images/review_status/uncheck_Status.svg";
import check_status from "@/assets/Images/review_status/check_status.svg";
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
      <div class="Application_info">APPLICANTS INFO</div>

      <div class="progress-bar gap-4">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step flex d-flex gap-2 "
        >
          <div class="step-circle">
            <img
              :src="step.completed ? check_status : uncheck_Status"
              alt="Step Circle"
            />
          </div>
          <div class="step-label">{{ step.label }}</div>
        </div>
      </div>
      <div class="">
        <img :src="info" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      check_status,
      uncheck_Status,
      steps: [
        { label: "HR ADMIN", completed: true },
        { label: "Managing Director", completed: true },
        { label: "Vice President", completed: false },
        { label: "PRESIDENT", completed: false },
      ],
    };
  },
};
</script>

<style>
.step-circle {
  width: 40px;
  height: 40px;
}

.step-circle img {
  width: 100%;
  height: 100%;
}

.step-label {
  margin-top: 10px;
  font-size: 14px;
}
</style>
