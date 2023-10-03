import { RouterView } from 'vue-router';

<template>
  <nav class="nav_background p-3">
    <div class="navbar navbar-expand-lg px-5">
      <div class="container-fluid">
        <div class="flex d-flex justify-content-center gap-4">
          <div class="logo">
            <img :src="logo" alt="logo" />
          </div>
          <div class="job_portal d-flex align-items-center">
            <a class="navbar-brand text-white title_bold" href="#"
              ><b>Job Portal</b></a
            >
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse padding_left"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active text-white normal_font" to="/"
                >Home</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          
          <RouterLink class="nav-link active text-white normal_font" to="/login"
                ><img :src="userImage" alt="User Image" /></RouterLink
              >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import userImage from "@/assets/Images/user-solid 1 (1).png";
import logo from "@/assets/Images/logo.png";
export default {
  data() {
    return {
      userImage,
      logo,
    };
  },
};
</script>
