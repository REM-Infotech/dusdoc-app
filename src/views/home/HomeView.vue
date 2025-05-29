<script setup lang="ts">
import CardEmployee from "./components/CardEmployee.vue";
import CardSolicitacao from "./components/CardSolicitacao.vue";
import ListDocsView from "./components/ListDocsView.vue";
import SolicitacoesView from "./components/SolicitacoesView.vue";
</script>

<template>
  <div class="overflow-y-auto">
    <div class="d-flex flex-column gap-2 justify-content-center align-items-center">
      <CardEmployee />
      <ListDocsView />
      <CardSolicitacao />
      <SolicitacoesView />
    </div>
  </div>
</template>
