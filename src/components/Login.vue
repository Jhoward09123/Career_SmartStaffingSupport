<script setup>
import { ref } from 'vue'
import { RouterView, useRouter} from "vue-router";
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()
const router = useRouter()

const form_data = ref({
  email: '',
  password: ""
})

</script>

<template>
  <main class="" v-if="showLogin">
    <div class="padding_body">
      <div class="login_outside flex d-flex justify-content-center">
        <div class="login_border border border-dark">
          <form @submit.prevent="authStore.handleLogin(form_data)">
            <div class="pad_top_log">
              <div class="Admin_login"> Login</div>
              <label class="user_label"> Email </label>
              <div>
                <input class="input_User" type="email" v-model="form_data.email" required/>
              </div>
              <label class="user_password"> Password </label>
              <div>
                <input class="input_Password" type="password" v-model="form_data.password" required />
              </div>
  
              <div class="flex d-flex justify-content-center pt-5 gap-4">
                <div class="">
                
                  <button class="Login_btn" type="submit">Login</button>
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
          </form>
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
