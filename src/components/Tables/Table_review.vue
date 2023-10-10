<template>
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
        <tr v-for="(item, index) in filteredData" :key="index">
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
          Page {{ currentPage }} out of {{ totalPages }}
        </div>
      </div>
      <div class="w-50 d-flex justify-content-end gap-4">
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

      <!-- Page Selector Dropdown -->
    </div>
  </div>
</template>

<script setup>
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
      // ... your other data ...

      baseData: [
        {
          Name: "John Doe",
          Role: "Developer",
          Category: "Full-time",
          Location: "USA",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Alice Johnson",
          Role: "Designer",
          Category: "Part-time",
          Location: "Canada",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },
        {
          Name: "Bob Smith",
          Role: "Manager",
          Category: "Full-time",
          Location: "UK",
          info_icon: info,
          Accept_icon: check,
          Delete_icon: Delete_icon,
        },

        // Add more data objects here if needed
      ],
    };
  },
  computed: {
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
  },
};
</script>

<style></style>
