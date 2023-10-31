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
              <RouterLink class="nav_link py-2" to="/Interview">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Job Management</span></RouterLink
              >

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
          <RouterLink class="" to="/Job_Management_Add_Job">
            <button class="btn btn-primary add_job_btn">
              <img :src="profile_pic" alt="profile_pic" />
              ADD JOB
            </button>
          </RouterLink>
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
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search Job"
                aria-label="Search"
                v-model="searchQuery"
              />
            </div>
          </div>
        </div>
  <!-- table here -->
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
            <tr v-for="(item, index) in getPaginatedData" :key="index">
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </td>
              <td>{{ item.name }}</td>
              <!-- <td>{{ store.getJobCategory(item.job_category_id).name }}</td>  -->
              <td>{{ item.job_category.name }}</td>
              <td>{{ item.min_salary+" - "+item.min_salary }}</td>
              <td>{{ item.country.name }}</td>
              <td>
                <div class="flex d-flex justify-content-center gap-2">
                  <img :src="edit_icon" alt="edit_icon" />
                  <img :src="info" alt="Info Icon" />
                  <img :src="check" alt="Accept Icon" />
                  <img :src="Delete_icon" alt="Delete Icon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex gap-4">
          <div class="w-50 d-flex gap-4">
            <div class="Status_pages">
              Page {{ currentPage }} out of {{ totalPages }}
            </div>
          </div>
          <div class="w-50 d-flex justify-content-end gap-4">
            <!-- <select id="pageSelector" v-model="currentPage">
              <option v-for="page in totalPages" :key="page" :value="page">
                {{ page }}
              </option>
            </select> -->
            <!-- new selector -->
            <span> Select Page :</span>
            <select v-model="currentPage">
              <option v-for="page in totalPages" :key="page" :value="page">
                {{ page }}
              </option>
            </select>
            <!-- 
            <button
              @click="previousPage"
              :disabled="currentPage === 1"
              class="NoBgNoBor"
            >
              <img :src="Previous_icon" alt="Previous_icon" />
            </button> -->

            <button
              class="NoBgNoBor"
              @click="previousPage"
              :disabled="currentPage === 1"
            >
              <img :src="Previous_icon" alt="Previous_icon" />
            </button>

            <button
              class="NoBgNoBor"
              @click="nextPage"
              :disabled="currentPage === totalPages"
            >
              <img :src="Next_icon" alt="Next_icon" />
            </button>

            <!-- Next Button -->
            <!-- <button
              class="NoBgNoBor"
              @click="nextPage"
              :disabled="currentPage === totalPages"
            >
              <img :src="Next_icon" alt="Next_icon" />
            </button> -->
          </div>

          <!-- Page Selector Dropdown -->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Next_icon from "@/assets/Images/table_icons/Next.svg";
import Previous_icon from "@/assets/Images/table_icons/previous.svg";

import Delete_icon from "@/assets/Images/delete.png";
import check from "@/assets/Images/check.png";
import info from "@/assets/Images/info.png";
import edit_icon from "@/assets/Images/action_icon/edit_icon_action.svg";

import sort_icon from "@/assets/Images/table_icons/sort-solid 1.svg";

import profile_pic from "@/assets/Images/Btn_icons/ADD_JOB_ICON.svg";
import usa_flag from "@/assets/Images/flag_only/usa_flag.png";
import phil_flag from "@/assets/Images/flag_only/flag philippines.png";
import kenya_flag from "@/assets/Images/flag_only/kenya_flag.png";
import lebanon_flag from "@/assets/Images/flag_only/lebanon_flag.png";
import { useGlobalStore } from "@/stores/globalStore";

import { ref, computed ,isReactive, onMounted, onBeforeMount} from "vue";

const store = useGlobalStore();

const jobs = ref ([])


onMounted( async () => {
  await store.getJobs()
  
  jobs.value = store.jobs
  
})

const currentPage = ref(1);
const itemsPerPage = 3;

const searchQuery = ref("");
const rangeValue = ref(1000);

const totalPages = computed(() =>
  Math.ceil(filteredData.value.length / itemsPerPage)
);

const getPaginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  console.log(startIndex);
  return filteredData.value.slice(startIndex, startIndex + itemsPerPage);
});

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const filteredData = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) {
    return jobs.value;
  }

  return jobs.value.filter((item) => {
    const name = item.name.toLowerCase();
    return name.includes(query);
  });
});



const paginatedData = ref(jobs);
</script>

<style>
.View_all_btn {
  background: none;
  border-style: none;
}

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
  border-radius: 15px;
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
