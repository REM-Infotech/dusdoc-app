<script setup lang="ts">
import { StyledDiv } from "@/components/styled";
import manager from "@/resources/socketio";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, onBeforeMount, ref } from "vue";

const solicitacoes = ref<Record<string, string>[]>([]);
const io = manager.socket("/funcionario_informacoes");
io.connect();

onBeforeMount(() => {
  io.emit("solicitados", (data: Record<string, string>[]) => {
    solicitacoes.value = data;
  });
});

const query = ref("");

const computedFiles = computed(() => {
  return solicitacoes.value.filter((solicitacao) =>
    solicitacao.solicitacao_desc.toLowerCase().includes(query.value.toLowerCase()),
  );
});

const classIcons: Record<string, string> = {
  png: "p-1 bg-primary rounded",
  word: "p-1 bg-primary rounded",
  pdf: "p-1 bg-danger rounded",
};

function classIcon(extension_file: string) {
  return classIcons[extension_file] || "p-1 bg-secondary rounded";
}
</script>

<template>
  <StyledDiv class="mt-2" id="solicitacoes">
    <div class="d-flex gap-0 justify-content-between align-items-center">
      <span class="ms-1 fw-semibold">Solicitações</span>
    </div>
    <div
      class="card mt-2 overflow-x-hidden"
      :style="{ height: solicitacoes.length >= 8 ? '150px' : '' }"
    >
      <TransitionGroup
        class="list-group overflow-y-auto overflow-x-hidden"
        name="list"
        tag="ul"
        mode="out-in"
      >
        <li
          class="list-group-item p-2"
          v-for="(file, index) in computedFiles"
          :key="file.solicitacao_desc"
          :data-index="index"
        >
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center">
              <div :class="classIcon(file.extension_file)">
                <FontAwesomeIcon :icon="faFileInvoice" size="xl" color="white" />
              </div>
              <div class="d-grid gap-0 ms-2">
                <span class="fw-semibold">{{ file.solicitacao_desc }}</span>
                <span class="text-secondary fw-semibold">
                  Solicitado em {{ file.request_date }}</span
                >
              </div>
            </div>
            <RouterLink
              :to="{ name: 'form', params: { typeform: 'admissional' } }"
              class="btn btn-primary btn-sm bg-opacity-25 rounded"
            >
              Ver Formulário
            </RouterLink>
          </div>
        </li>
      </TransitionGroup>
    </div>
  </StyledDiv>
</template>

<style lang="css" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
