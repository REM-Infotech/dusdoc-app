<script setup lang="ts">
import CardEmployee from "./components/CardEmployee.vue";
import CardSolicitacao from "./components/CardSolicitacao.vue";
import ListDocsView from "./components/ListDocsView.vue";
import SolicitacoesView from "./components/SolicitacoesView.vue";
</script>

<template>
  <div class="p-2 overflow-y-auto" style="height: 87.7dvh">
    <div>
      <CardEmployee />
      <ListDocsView />
      <CardSolicitacao />
      <SolicitacoesView />
      <ListDocsView />
      <ListDocsView />
      <ListDocsView />
    </div>
  </div>
</template>
