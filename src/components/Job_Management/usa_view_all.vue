<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <div class="shadow border">
      <Side_panel />
    </div>

    <!-- Main Content -->
    <div class="main_content height-100 bg-white">
      <div class="Main_title_Dash">Job Management Dashboard</div>
      <div class="table_border">
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
              <td>{{ item.job_title }}</td>
              <td>{{ item.job_category }}</td>
              <td>{{ item.salary }}</td>
              <td>{{ item.location }}</td>
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

import Side_panel from "../Side_panel.vue";

import { ref, computed } from "vue";

const currentPage = ref(1);
const itemsPerPage = 5;

const searchQuery = ref("");

const totalPages = computed(() =>
  Math.ceil(filteredData.value.length / itemsPerPage)
);

const getPaginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
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
    return baseData.value;
  }

  return baseData.value.filter((item) => {
    const jobTitle = item.job_title.toLowerCase();
    return jobTitle.includes(query);
  });
});

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

<style></style>
