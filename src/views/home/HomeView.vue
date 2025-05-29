<script setup lang="ts">
import CardEmployee from "./components/CardEmployee.vue";
import CardSolicitacao from "./components/CardSolicitacao.vue";
import ListDocsView from "./components/ListDocsView.vue";
import SolicitacoesView from "./components/SolicitacoesView.vue";
</script>

<template>
  <div class="d-flex flex-column gap-3 overflow-y-auto py-2">
    <CardEmployee />
    <ListDocsView />
    <CardSolicitacao />
    <SolicitacoesView />
  </div>
</template>
