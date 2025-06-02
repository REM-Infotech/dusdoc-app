<script setup lang="ts">
import CardEmployee from "./components/CardEmployee.vue";
import ListDocsView from "./components/ListDocsView.vue";
</script>

<template>
  <div class="d-flex flex-column gap-4 overflow-y-auto py-2 align-items-center overflow-x-hidden">
    <CardEmployee class="w-100 ps-3 pe-3" />
    <ListDocsView class="w-100 ps-3 pe-3" />
  </div>
</template>
