<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <div class="shadow border">
      <Side_panel />
    </div>

    <!-- Main Content -->
    <div class="main_content height-100 bg-white">
        <div class="Main_title_Dash">Job Management Dashboard</div>
      <div class="mt-4">Filtering of job listings</div>
    </div>
  </main>
</template>

<script setup>
import Side_panel from "@/components/Side_panel.vue";
</script>

<style></style>
