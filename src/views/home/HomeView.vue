<script setup lang="ts">
import { ref } from "vue";
import CardEmployee from "./components/CardEmployee.vue";
import CardSolicitacao from "./components/CardSolicitacao.vue";
import ListDocsView from "./components/ListDocsView.vue";
import SolicitacoesView from "./components/SolicitacoesView.vue";
import io from "@/stores/socketio";

const avisos = ref(false);

io.emit("get_status_system", { id: 12345 }, (data: unknown) => {
  console.log("Status recebido do servidor:", data);
});
</script>

<template>
  <div class="d-flex flex-column gap-4 overflow-y-auto py-2 align-items-center overflow-x-hidden">
    <CardEmployee class="w-100 ps-3 pe-3" />
    <ListDocsView class="w-100 ps-3 pe-3" />
    <SolicitacoesView class="w-100 ps-3 pe-3" />
    <CardSolicitacao class="w-100 ps-3 pe-3" v-if="avisos" />
  </div>
</template>
