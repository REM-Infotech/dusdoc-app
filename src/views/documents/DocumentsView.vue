<script setup lang="ts">
import ListDocsView from "./components/ListDocsView.vue";
import SolicitacoesView from "./components/SolicitacoesView.vue";
</script>

<template>
  <div class="d-flex flex-column gap-4 overflow-y-auto py-2 align-items-center overflow-x-hidden">
    <ListDocsView class="w-100 ps-3 pe-3" />
    <SolicitacoesView class="w-100 ps-3 pe-3" />
  </div>
</template>
