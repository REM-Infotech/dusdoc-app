<script setup lang="ts">
import CardEmployee from "../home/components/CardEmployee.vue";
import CardSolicitacao from "../home/components/CardSolicitacao.vue";
import ListDocsView from "../home/components/ListDocsView.vue";
</script>

<template>
  <div class="d-flex flex-column gap-4 overflow-y-auto py-2 align-items-center overflow-x-hidden">
    <CardEmployee class="w-100 ps-3 pe-3" />
    <ListDocsView class="w-100 ps-3 pe-3" />
    <CardSolicitacao class="w-100 ps-3 pe-3" />
  </div>
</template>
