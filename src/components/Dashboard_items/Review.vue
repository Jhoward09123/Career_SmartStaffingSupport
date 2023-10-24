<script setup>
import { RouterLink, RouterView } from "vue-router";

import kenya_circle from "@/assets/Images/flag_circle/kenya circle.png";
import lebanon_circle from "@/assets/Images/flag_circle/lebanon_circle.png";
import philipine_circle from "@/assets/Images/flag_circle/philipine_circle.png";
import usa_circle from "@/assets/Images/flag_circle/usa_circle.png";

// import Table_review from "@/Tables/Table_review.vue";

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
      <div class="review">REVIEW APPLICANTS DASHBOARD</div>
      <div class="cards_hold flex d-flex justify-content-left gap-5 pt-3">
        <router-link to="/Review/Review_all_usa">
          <div class="usa_card_review shadow">
            <div class="image_circle pb-3">
              <img :src="usa_circle" alt="User Image" />
            </div>
            <div class="country_title">USA</div>
            <div class="new_app pt-2">
              <div class="">For Approval: <b>18</b></div>
            </div>
          </div>
        </router-link>
        <router-link to="/Review/Big_table_phil">
          <div class="philippines_card_review shadow">
            <div class="image_circle pb-3">
              <img :src="philipine_circle" alt="User Image" />
            </div>
            <div class="country_title">PHILIPPINES</div>
            <div class="new_app pt-2">
              <div class="">For Approval: <b>18</b></div>
            </div>
          </div>
        </router-link>

        <router-link to="/Review/Big_table_Kenya">
          <div class="Kenya_card_review shadow">
            <div class="image_circle pb-3">
              <img :src="kenya_circle" alt="User Image" />
            </div>
            <div class="country_title">KENYA</div>
            <div class="new_app pt-2">
              <div class="">For Approval: <b>18</b></div>
            </div>
          </div>
        </router-link>

        <router-link to="/Review/Big_table_lebanon">
          <div class="Lebanon_card_review shadow">
            <div class="image_circle pb-3">
              <img :src="lebanon_circle" alt="User Image" />
            </div>
            <div class="country_title">LEBANON</div>
            <div class="new_app pt-2">
              <div class="">For Approval: <b>18</b></div>
            </div>
          </div>
        </router-link>
      </div>

      <!-- TABLE HERE -->
      <Table_review />
    </div>
  </main>
</template>

<script></script>

<style>
.review {
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
}
.usa_card_review:hover .country_title,
.usa_card_review:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.usa_card_review:hover {
  background-color: #040c53;
  cursor: pointer;
}

.philippines_card_review:hover {
  background-color: #040c53;
  cursor: pointer;
}

.philippines_card_review:hover .country_title,
.philippines_card_review:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.Kenya_card_review:hover {
  background-color: #040c53;
  cursor: pointer;
}

.Kenya_card_review:hover .country_title,
.Kenya_card_review:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.Lebanon_card_review:hover {
  background-color: #040c53;
  cursor: pointer;
}

.Lebanon_card_review:hover .country_title,
.Lebanon_card_review:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.usa_card_review,
.philippines_card_review,
.Kenya_card_review,
.Lebanon_card_review {
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
  border: 1px solid black;
}
</style>
