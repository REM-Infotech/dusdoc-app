<script setup lang="ts">
import { StyledDiv } from "@/components/styled";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref } from "vue";
import { solicitacoes } from "../resources/ListSolicitacoes";

const query = ref("");

const computedFiles = computed(() => {
  return solicitacoes.filter((file) =>
    file.solicitacao_desc.toLowerCase().includes(query.value.toLowerCase()),
  );
});
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
              <div :class="file.class_icon">
                <FontAwesomeIcon :icon="file.icon" size="xl" color="white" />
              </div>
              <div class="d-grid gap-0 ms-2">
                <span class="fw-semibold">{{ file.solicitacao_desc }}</span>
                <span class="text-secondary fw-semibold" v-if="file.send_date">
                  Atualizado em {{ file.send_date }}</span
                >
                <span class="text-secondary fw-semibold" v-else-if="file.request_date">
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
