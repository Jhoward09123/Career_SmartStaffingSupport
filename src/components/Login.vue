<script setup>
import { RouterView } from "vue-router";
import axios, { isCancel, AxiosError } from "axios";
</script>

<template>
  <main class="" v-if="showLogin">
    <div class="padding_body">
      <div class="login_outside flex d-flex justify-content-center">
        <div class="login_border border border-dark">
          <div class="pad_top_log">
            <div class="Admin_login">Admin Login</div>
            <label class="user_label"> User </label>
            <div>
              <input class="input_User" type="text" />
            </div>
            <label class="user_password"> Password </label>
            <div>
              <input class="input_Password" type="password" />
            </div>

            <div class="flex d-flex justify-content-center pt-5 gap-4">
              <div class="">
                <RouterLink
                  class="nav-link active text-white normal_font"
                  to="/DashBoard"
                >
                  <button class="Login_btn">Login</button>
                </RouterLink>
              </div>
              <div class="">
                <router-link
                  class="nav-link active text-white normal_font"
                  to="/Sign_up_Admin"
                >
                  <button @click="closeLogin" class="signUp_btn">
                    Sign Up
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true, // Initially, the component is visible
    };
  },
  methods: {
    closeLogin() {
      this.showLogin = false; // Set showLogin to false to hide the component
    },
  },
};
</script>
