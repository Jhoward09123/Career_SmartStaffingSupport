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
            <button @click="authStore.handleLogOut" class="nav_name btn_logout">
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
      <div class="review">All APPLICANTS DASHBOARD</div>

      <!-- table here -->

      <div class="table_dash pt-5">
        <div class="flex d-flex">
          <div class="forReview justify-content-left w-50 flex d-flex gap-2">
            All Review Philippines

            <div class="flag">
              <img :src="phil_flag" alt="phil_flag" />
            </div>
          </div>
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
                  <img
                    :src="sort_icon"
                    :class="{ reversed: sortOrder === -1 }"
                    alt="sort_icon"
                  />
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

        <div class="d-flex gap-4">
          <div class="w-50">
            <div class="Status_pages">
              Page {{ currentPage }} out of
              {{ Math.ceil(filteredData.length / itemsPerPage) }}
            </div>
          </div>
          <div class="w-50 d-flex justify-content-end gap-4">
            <select v-model="currentPage">
              <option
                v-for="page in totalPageOptions"
                :key="page"
                :value="page"
              >
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

          <!-- Page Selector Dropdown -->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import phil_flag from "@/assets/Images/flag_only/flag philippines.png"
import usa_flag from "@/assets/Images/flag_only/usa_flag.png";
import sort_icon from "@/assets/Images/table_icons/sort-solid 1.svg";
import Next_icon from "@/assets/Images/table_icons/Next.svg";
import Previous_icon from "@/assets/Images/table_icons/previous.svg";
import Delete_icon from "@/assets/Images/delete.png";
import check from "@/assets/Images/check.png";
import info from "@/assets/Images/info.png";
</script>

<script>
export default {
  data() {
    return {
      sortOrder: 1,
      sortNameAsc: true, // sorting for true and false
      searchQuery: "", // empty search
      itemsPerPage: 8, // change the number of rows
      currentPage: 1, //  current page holder
      categoryOrder: 1, // start from 1 and decend to -1

      //data
      baseData: [
      {
          Name: "Sarah Johnson",
          Role: "Software Engineer",
          Category: "Full-time",
          Location: "USA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Juan Rodriguez",
          Role: "Graphic Designer",
          Category: "Part-Time",
          Location: "PHILIPPINES",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Eliud Kipchoge",
          Role: "Marathon Runner",
          Category: "Full-time",
          Location: "KENYA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Layla Hassan",
          Role: "Software Developer",
          Category: "Remote",
          Location: "LEBANON",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Michael Johnson",
          Role: "Product Manager",
          Category: "Full-time",
          Location: "USA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Maria Gonzales",
          Role: "Customer Support",
          Category: "Part-Time",
          Location: "PHILIPPINES",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Ezekiel Kamau",
          Role: "Software Engineer",
          Category: "Full-time",
          Location: "KENYA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Lina Nassar",
          Role: "Marketing Specialist",
          Category: "Part-Time",
          Location: "LEBANON",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "John Smith",
          Role: "Project Manager",
          Category: "Full-time",
          Location: "USA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Andres Ramos",
          Role: "Designer",
          Category: "Part-Time",
          Location: "PHILIPPINES",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Wangari Maathai",
          Role: "Environmental Activist",
          Category: "Full-time",
          Location: "KENYA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Karim Khalil",
          Role: "UX Designer",
          Category: "Part-Time",
          Location: "LEBANON",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Michael Johnson",
          Role: "Product Manager",
          Category: "Full-time",
          Location: "USA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Maria Gonzales",
          Role: "Customer Support",
          Category: "Part-Time",
          Location: "PHILIPPINES",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Ezekiel Kamau",
          Role: "Software Engineer",
          Category: "Full-time",
          Location: "KENYA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Lina Nassar",
          Role: "Marketing Specialist",
          Category: "Part-Time",
          Location: "LEBANON",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "John Smith",
          Role: "Project Manager",
          Category: "Full-time",
          Location: "USA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Andres Ramos",
          Role: "Designer",
          Category: "Part-Time",
          Location: "PHILIPPINES",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Wangari Maathai",
          Role: "Environmental Activist",
          Category: "Full-time",
          Location: "KENYA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Karim Khalil",
          Role: "UX Designer",
          Category: "Part-Time",
          Location: "LEBANON",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },

        // Add more data
      ],
    };
  },
  computed: {
    //for search
    filteredData() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.baseData; // Return all data if query is empty
      }

      return this.baseData.filter((item) => {
        const name = item.Name.toLowerCase();
        const role = item.Role.toLowerCase();
        const location = item.Location.toLowerCase();

        return (
          name.includes(query) ||
          role.includes(query) ||
          location.includes(query)
        );
      });
    },

    // page status 1 out 2
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredData.slice(startIndex, endIndex);
    },
    //Total for page for drop
    totalPageOptions() {
      const totalItems = this.filteredData.length;
      const totalPages = Math.ceil(totalItems / this.itemsPerPage);
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    },
  },

  methods: {
    //sort by category
    sortByCategory() {
      // Toggle the sorting order
      this.sortOrder = this.sortOrder * -1;

      this.filteredData.sort((a, b) => {
        const categoryA = a.Category.toLowerCase();
        const categoryB = b.Category.toLowerCase();

        // Multiply by sortOrder to control ascending or descending order
        if (categoryA < categoryB) {
          return -1 * this.sortOrder;
        } else if (categoryA > categoryB) {
          return 1 * this.sortOrder;
        }
        return 0;
      });
    },

    //name sorting
    sortByName() {
      this.sortNameAsc = !this.sortNameAsc;
      this.baseData.sort((a, b) => {
        const nameA = a.Name.toLowerCase();
        const nameB = b.Name.toLowerCase();

        if (this.sortNameAsc) {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    },

    //Sorting by Role
    sortByRole() {
      this.sortRoleAsc = !this.sortRoleAsc;
      this.baseData.sort((a, b) => {
        const nameA = a.Name.toLowerCase();
        const nameB = b.Name.toLowerCase();

        if (this.sortRoleAsc) {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    },

    //next page
    nextPage() {
      if (this.currentPage < this.totalPageOptions.length) {
        this.currentPage++;
      }
    },
    //previous Page
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style></style>
