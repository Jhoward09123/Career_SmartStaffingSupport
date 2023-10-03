<script setup>
import { RouterLink, RouterView } from "vue-router";

import Side_panel from "../Side_panel.vue";
</script>

<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <Side_panel />

    <!-- Main Content -->
    <div class="height-100 bg-light p-3 main_content">Interview</div>
    <RouterView />
  </main>
</template>

<style></style>
