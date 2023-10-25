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
                <button
                  @click="authStore.handleLogOut"
                  class="nav_name btn_logout"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main_content height-100 bg-white">
      <div class="Job_Management">Job Management Dashboard</div>
      <div class="filtering_job">Filtering of job listings</div>

      <div class="filter_hold">
        <div class="filter_items_hold">
          <select class="job_cate_input" placeholder="job">
            <option value="" disabled selected>JOB CATEGORY</option>
            <option>Remote</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
          </select>
        </div>
        <div class="filter_items_hold">
          <input type="range" v-model="rangeValue" min="1000" max="1500" />
          <span>{{ rangeValue }}</span>
        </div>
        <div class="filter_items_hold">filter_items_hold</div>
        <div class="filter_items_hold">filter_items_hold</div>
      </div>
      <!-- table here -->
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      rangeValue: 1000,
    };
  },
};
</script>
<style>
.job_cate_input {
  padding: 15px 20px;
  border-radius: 15px;
  border: 1px solid #000;
}

.filter_hold {
  padding: 25px;
  border: solid 1px black;
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 33px;
}

.Job_Management {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  color: #000;
}
</style>
