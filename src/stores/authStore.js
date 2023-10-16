import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {isUserLoggedIn} from "@/auth/utils";
// import useJwt from "@/auth/jwt/useJwt";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";


const toast = useToast();

export const AuthStore = defineStore("AuthStore", () => {

  const router = useRouter();
  const loggedIn = ref(false);
  let is_clocked_in = ref(false)

  const status = isUserLoggedIn();

  if (status == null){
    loggedIn.value = false;
  }else{
    // user is logged in
    loggedIn.value = true;
  }


  function updateIsLoggedInToTrue(){
      loggedIn.value = true;
  }
  function updateIsLoggedInToFalse(){
      loggedIn.value = false;
  }

  function logout() {
    

      // Remove userData from localStorage
      // ? we just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token

      // Remove userData from localStorage
      localStorage.removeItem('userData')
      destroyClockInSession()
      

      // Reset ability
      // this.$ability.update(initialAbility)

      // Redirect to login page
      loggedIn.value = false;
      router.push({ name: "login" }).then(() => {
        toast.success(
          "You have successfully logged out.",
          {
            timeout: 2000,
          }
        );
      });
  }

  function setClockInSession() {
    localStorage.setItem("clockedIn", true);
    is_clocked_in.value = true
  }

  function destroyClockInSession() {
    localStorage.removeItem("clockedIn");
    is_clocked_in.value = false;
  }

  function isClockedIn(){
    let clocked_in_status = localStorage.getItem("clockedIn");
    if(clocked_in_status == null){
      is_clocked_in.value = false
      return false
    }else{
      is_clocked_in.value = true
      return true
    }
  }

  return {
    loggedIn,
    is_clocked_in,
    updateIsLoggedInToTrue,
    updateIsLoggedInToFalse,
    logout,
    setClockInSession,
    destroyClockInSession,
    isClockedIn,
  };
}); 