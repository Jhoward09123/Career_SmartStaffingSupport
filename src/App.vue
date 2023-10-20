<script setup>
import { RouterLink, RouterView } from "vue-router";

import Navbar from "./views/NavBar.vue";
import Login from "./components/Login.vue";
import DashBoard from "./views/DashBoard.vue";
import Side_panel from "./components/Side_panel.vue";
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<script></script>

<style></style>
