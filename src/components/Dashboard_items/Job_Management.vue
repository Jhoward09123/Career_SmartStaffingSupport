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
      <div class="filtering_job mt-4">Filtering of job listings</div>
      <div class="filter_hold">
        <div class="filter_items_hold">
          <select
            class="form-select by_country"
            aria-label="Default select example"
          >
            <option selected disabled>JOB CATEGORY</option>
            <option value="1">Remote</option>
            <option value="2">Full-Time</option>
            <option value="3">Part-Time</option>
          </select>
        </div>
        <div class="filter_items_hold">
          <div class="salary_range_hold">Salary Range</div>
          <input type="range" v-model="rangeValue" min="1000" max="1500" />
          <div class="value_range_hold">
            <span class="rangeValue">${{ rangeValue }}</span>
          </div>
        </div>
        <div class="filter_items_hold">
          <select
            class="form-select by_country"
            aria-label="Default select example"
          >
            <option selected disabled>By Country</option>
            <option>USA</option>
            <option>PHILIPPINES</option>
            <option>KENYA</option>
            <option>LEBANON</option>
          </select>
        </div>
        <div class="filter_items_hold">
          <div class="btn_submit_hold">
            <button class="btn btn-primary submit_btn">SUBMIT</button>
          </div>
        </div>
      </div>

      <hr />

      <div class="add_location_box_hold">
        <div class="loaction_add_items_hold">
          <button class="btn btn-primary add_job_btn">
            <img :src="profile_pic" alt="profile_pic" />
            ADD JOB
          </button>
        </div>
        <div class="loaction_add_items">
          <div class="border_country gap-2">
            <div class="">
              <img :src="usa_flag" />
            </div>
            <div class="">
              <span class="country_value">USA: <b>15</b></span>
            </div>
          </div>
        </div>
        <div class="loaction_add_items">
          <div class="border_country gap-2">
            <div class="">
              <img :src="phil_flag" />
            </div>
            <div class="">
              <span class="country_value">PHILIPPINES: <b>15</b></span>
            </div>
          </div>
        </div>
        <div class="loaction_add_items">
          <div class="border_country gap-2">
            <div class="">
              <img :src="kenya_flag" />
            </div>
            <div class="">
              <span class="country_value">KENYA: <b>15</b></span>
            </div>
          </div>
        </div>
        <div class="loaction_add_items">
          <div class="border_country gap-2">
            <div class="">
              <img :src="lebanon_flag" />
            </div>
            <div class="">
              <span class="country_value">LEBANON: <b>15</b></span>
            </div>
          </div>
        </div>
      </div>
      <!-- table here -->

      <div class="tableJob_hold border border-secondary mt-5">
        <div class="Table_top_holder w-100 my-3">
          <div class="w-50">
            <div class="jobs_table_title">JOBS TABLE</div>
          </div>
          <div class="w-50 d-flex">
            <div class="delete_select_hold w-50">
              <button class="Delete_Selected_btn btn btn-danger">
                Delete Selected Item
              </button>
            </div>
            <div class="w-50 d-flex">
             <input class="form-control mr-sm-2" type="search" placeholder="Search Job" aria-label="Search" >
            </div>
          </div>
        </div>

        <table class="table_dashboard table table-bordered rounded text-center">
          <thead>
            <tr>
              <th class="head_review" scope="col">Select</th>
              <th class="head_review" scope="col">
                Job Title
                <button class="NoBgNoBor" @click="sortByName">
                  <img :src="sort_icon" alt="sort_icon" />
                </button>
              </th>
              <th class="head_review" scope="col">
                Job Category
                <button class="NoBgNoBor" @click="sortByRole">
                  <img :src="sort_icon" alt="sort_icon" />
                </button>
              </th>
              <th class="head_review" scope="col">
                salary
                <button class="NoBgNoBor" @click="sortByCategory">
                  <img :src="sort_icon" alt="sort_icon" />
                </button>
              </th>
              <th class="head_review" scope="col">Location</th>
              <th class="head_review" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in baseData" :key="index">
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>{{ item.job_title }}</td>
              <td>{{ item.job_category }}</td>
              <td>{{ item.salary }}</td>
              <td>{{ item.location }}</td>
              <td>
                <div class="flex d-flex justify-content-center gap-2">
                  <img :src="info" alt="Info Icon" />
                  <img :src="check" alt="Accept Icon" />
                  <img :src="Delete_icon" alt="Delete Icon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup>
import Delete_icon from "@/assets/Images/delete.png";
import check from "@/assets/Images/check.png";
import info from "@/assets/Images/info.png";

import sort_icon from "@/assets/Images/table_icons/sort-solid 1.svg";

import profile_pic from "@/assets/Images/Btn_icons/ADD_JOB_ICON.svg";
import usa_flag from "@/assets/Images/flag_only/usa_flag.png";
import phil_flag from "@/assets/Images/flag_only/flag philippines.png";
import kenya_flag from "@/assets/Images/flag_only/kenya_flag.png";
import lebanon_flag from "@/assets/Images/flag_only/lebanon_flag.png";

import { ref } from "vue";

const rangeValue = ref(1000);

const baseData = ref([
  {
    select: "Select",
    job_title: "Customer Service Representative",
    job_category: "Full-Time",
    salary: "$25,000",
    location: "USA",
  },
  {
    select: "Select",
    job_title: "Technical Support Specialist",
    job_category: "Part-Time",
    salary: "$20,000",
    location: "Philippines",
  },
  {
    select: "Select",
    job_title: "Quality Assurance Analyst",
    job_category: "Remote",
    salary: "$30,000",
    location: "Kenya",
  },
  {
    select: "Select",
    job_title: "Team Leader - BPO Operations",
    job_category: "Full-Time",
    salary: "$35,000",
    location: "Lebanon",
  },
]);

const paginatedData = ref(baseData);
</script>

<style>
.Delete_Selected_btn {
  color: white;
  font-size: 18px;
  font-style: normal;

  border-radius: 10px;
  background: #ff8686;
  border-style: none;
  padding: 10px 20px;
}
.Table_top_holder {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.jobs_table_title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: black;
}

.tableJob_hold {
  padding: 15px 25px;
}

.salary_range_hold,
.rangeValue {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #000;
}

.add_job_btn {
  padding: 15px 20px;
  border-radius: 15px;
  background: var(--violet, #050d56);
  border-style: none;
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}

.loaction_add_items {
  border: solid 1px black;
  padding: 15px 20px;
  border-radius: 15px;
}

.country_value {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: black;
}

.border_country {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.add_location_box_hold {
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 33px;
}
.submit_btn {
  padding: 15px 20px;
  border-radius: 15px;
  background: var(--violet, #050d56);
  border-style: none;
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}

.by_country {
  width: 220px;
  padding: 15px 20px;
  border-radius: 15px;
  border: 1px solid #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: #000;
}

.job_cate_input {
  padding: 15px 20px;
  border-radius: 15px;
  border: 1px solid #000;
}

.filter_hold {
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
