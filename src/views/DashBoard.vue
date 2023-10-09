<script setup>
import Side_panel from "../components/Side_panel.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <div class="shadow border">
      <Side_panel />
    </div>

    <!-- Main Content -->
    <div class="main_content height-100 bg-white">
      <div class="Title_dash">DashBoard</div>
      <div class="cards_hold flex d-flex justify-content-left gap-5 pt-3">
        <div class="usa_card shadow">
          <div class="image_circle pb-3">
            <img :src="usa_circle" alt="User Image" />
          </div>
          <div class="country_title">USA</div>
          <div class="new_app pt-2">
            <div class="">New Applicant: <b>18</b></div>
            <div class="">For Approval: <b>18</b></div>
            <div class="">Interview: <b>18</b></div>
          </div>
        </div>
        <div class="philippines_card shadow">
          <div class="image_circle pb-3">
            <img :src="philipine_circle" alt="User Image" />
          </div>
          <div class="country_title">PHILIPPINES</div>
          <div class="new_app pt-2">
            <div class="">New Applicant: <b>18</b></div>
            <div class="">For Approval: <b>18</b></div>
            <div class="">Interview: <b>18</b></div>
          </div>
        </div>
        <div class="Kenya_card shadow">
          <div class="image_circle pb-3">
            <img :src="kenya_circle" alt="User Image" />
          </div>
          <div class="country_title">KENYA</div>
          <div class="new_app pt-2">
            <div class="">New Applicant: <b>18</b></div>
            <div class="">For Approval: <b>18</b></div>
            <div class="">Interview: <b>18</b></div>
          </div>
        </div>
        <div class="Lebanon_card shadow">
          <div class="image_circle pb-3">
            <img :src="lebanon_circle" alt="User Image" />
          </div>
          <div class="country_title">LEBANON</div>
          <div class="new_app pt-2">
            <div class="">New Applicant: <b>18</b></div>
            <div class="">For Approval: <b>18</b></div>
            <div class="">Interview: <b>18</b></div>
          </div>
        </div>
      </div>
      <div class="table_dash pt-5">
        <div class="flex d-flex">
          <div class="forReview justify-content-left w-50">All For Review</div>
          <div class="search_dash w-50 gap-4">
            <label class="Search_text">Search</label>
            <input v-model="searchQuery" placeholder="" />
          </div>
        </div>
        <table class="table_dashboard table table-bordered rounded text-center">
          <thead>
            <tr>
              <th class="head_review" scope="col">
                Name
                <button class="NoBgNoBor" @click="sortByName">
                  <img :src="sort_icon" alt="sort_icon" />
                </button>
              </th>
              <th class="head_review" scope="col">
                Role
                <button class="NoBgNoBor" @click="sortByRole">
                  <img :src="sort_icon" alt="sort_icon" />
                </button>
              </th>
              <th class="head_review" scope="col">
                Category
                <button class="NoBgNoBor" @click="sortByCategory">
                  <img :src="sort_icon" alt="sort_icon" />
                </button>
              </th>
              <th class="head_review" scope="col">Location</th>
              <th class="head_review" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedData" :key="index">
              <td>{{ item.Name }}</td>
              <td>{{ item.Role }}</td>
              <td>{{ item.Category }}</td>
              <td>{{ item.Location }}</td>
              <td>
                <div class="flex d-flex justify-content-center gap-2">
                  <img :src="item.info_icon" alt="Info Icon" />
                  <img :src="item.Accept_icon" alt="Accept Icon" />
                  <img :src="item.Delete_icon" alt="Delete Icon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="d-flex gap-4 justify-content-end">
          <!-- Page Selector Dropdown -->
          <div class="Status_pages">
            Page {{ currentPage }} out of {{ totalPages }}
          </div>
          <select v-model="currentPage">
            <option v-for="page in totalPageOptions" :key="page" :value="page">
              {{ page }}
            </option>
          </select>

          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="NoBgNoBor"
          >
            <img :src="Previous_icon" alt="Previous_icon" />
          </button>

          <!-- Next Button -->
          <button
            class="NoBgNoBor"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            <img :src="Next_icon" alt="Next_icon" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
//icons import
import Delete_icon from "@/assets/Images/delete.png";
import check from "@/assets/Images/check.png";
import info from "@/assets/Images/info.png";
import kenya_circle from "@/assets/Images/flag_circle/kenya circle.png";
import lebanon_circle from "@/assets/Images/flag_circle/lebanon_circle.png";
import philipine_circle from "@/assets/Images/flag_circle/philipine_circle.png";
import usa_circle from "@/assets/Images/flag_circle/usa_circle.png";
import sort_icon from "@/assets/Images/table_icons/sort-solid 1.svg";
import Next_icon from "@/assets/Images/table_icons/Next.svg";
import Previous_icon from "@/assets/Images/table_icons/previous.svg";

export default {
  data() {
    return {
      baseData: [
        {
          Name: "Mark",
          Role: "Call Center Agent",
          Category: "Part-Time",
          Location: "Philippines",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Darnel",
          Role: "Business Ad",
          Category: "Remote",
          Location: "USA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "James",
          Role: "Call Center Agent",
          Category: "Full-time",
          Location: "Kenya",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Aaron",
          Role: "Call Center Agent",
          Category: "Full-time",
          Location: "Philippines",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },

        // Add more data objects here if needed
      ],

      //Icons
      Previous_icon,
      Next_icon,
      Delete_icon,
      check,
      info,
      kenya_circle,
      lebanon_circle,
      philipine_circle,
      usa_circle,

      sortOrderByCategory: 1,
      sortOrderByName: 1, // 1 for ascending, -1 for descending
      sortOrderByRole: 1,
      searchQuery: "",
      itemsPerPage: 3, // Number of items to display per page
      currentPage: 1, // Current page number
    };
  },
  computed: {
    totalPageOptions() {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    },

    sortedAndFilteredData() {
      const query = this.searchQuery.toLowerCase().trim();
      let data = this.baseData.slice();

      if (query) {
        data = data.filter((item) => {
          const name = item.Name.toLowerCase();
          const role = item.Role.toLowerCase();
          return name.includes(query) || role.includes(query);
        });
      }

      data.sort((a, b) => {
        const nameA = a.Name.toUpperCase();
        const nameB = b.Name.toUpperCase();
        const roleA = a.Role.toUpperCase();
        const roleB = b.Role.toUpperCase();

        if (this.sortOrderByName !== 0) {
          if (nameA < nameB) return -1 * this.sortOrderByName;
          if (nameA > nameB) return 1 * this.sortOrderByName;
        }

        if (this.sortOrderByRole !== 0) {
          if (roleA < roleB) return -1 * this.sortOrderByRole;
          if (roleA > roleB) return 1 * this.sortOrderByRole;
        }
        if (this.sortOrderByCategory !== 0) {
          if (a.Category < b.Category) return -1 * this.sortOrderByCategory;
          if (a.Category > b.Category) return 1 * this.sortOrderByCategory;
        }
        return 0;
      });
      return data;
    },
    filteredData() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.baseData; // Return all data if query is empty
      }

      return this.baseData.filter((item) => {
        const name = item.Name.toLowerCase();
        const role = item.Role.toLowerCase();
        return name.includes(query) || role.includes(query);
      });
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedAndFilteredData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.sortedAndFilteredData.length / this.itemsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    sortByName() {
      this.sortOrderByName = this.sortOrderByName * -1;
      this.sortOrderByRole = 0; // Reset role sorting
    },

    sortByCategory() {
      // Toggle the sorting order for category
      this.sortOrderByCategory = this.sortOrderByCategory === 1 ? -1 : 1;

      // Reset other sorting orders
      this.sortOrderByName = 0;
      this.sortOrderByRole = 0;

      // Sort the data by category
      this.sortedAndFilteredData.sort((a, b) => {
        const categoryA = a.Category.toUpperCase();
        const categoryB = b.Category.toUpperCase();

        if (this.sortOrderByCategory === 1) {
          if (categoryA < categoryB) return -1;
          if (categoryA > categoryB) return 1;
        } else {
          if (categoryA < categoryB) return 1;
          if (categoryA > categoryB) return -1;
        }

        // If categories are equal, maintain existing order
        return 0;
      });
    },
  },
};
</script>

<style>
.usa_card:hover .country_title,
.usa_card:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.usa_card:hover {
  background-color: #040c53;
  cursor: pointer;
}

.philippines_card:hover {
  background-color: #040c53;
  cursor: pointer;
}

.philippines_card:hover .country_title,
.philippines_card:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.Kenya_card:hover {
  background-color: #040c53;
  cursor: pointer;
}

.Kenya_card:hover .country_title,
.Kenya_card:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.Lebanon_card:hover {
  background-color: #040c53;
  cursor: pointer;
}

.Lebanon_card:hover .country_title,
.Lebanon_card:hover .new_app {
  color: white; /* Text color for country_title and new_app on hover */
}

.NoBgNoBor {
  background-color: white;
  border-style: none;
}
.Search_text {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: black;
}

.search_dash {
  display: flex;
  justify-content: right;
  padding-bottom: 15px;
}

.table_dashboard {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}

.forReview {
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
}
.table_dash {
  padding: 5px;
  border-radius: 30px;
  margin-top: 30px;
  border: 1px solid black;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
}

.usa_card,
.philippines_card,
.Kenya_card,
.Lebanon_card {
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
  border: 1px solid black;
}

/* .usa_card :hover{
  background-color: red;
} */

.country_title {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: black;
}
.new_app {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: black;
}
.Title_dash {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  color: black;
}

.main_content {
  padding-top: 50px;
  padding-left: 50px;
  padding-bottom: 50px;
  padding-right: 50px;
}
</style>
