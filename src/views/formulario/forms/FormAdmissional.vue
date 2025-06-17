<script setup lang="ts">
import { piniaState } from "@/main";
import admissionalStore from "@/stores/admissional";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import ArchivesView from "./tabs/ArchivesView.vue";
import DadoComplementarView from "./tabs/DadoComplementarView.vue";
import InfoPessoalView from "./tabs/InfoPessoalView.vue";

const { AdmissionalForm, AdmissionalFormFiles } = storeToRefs(admissionalStore(piniaState));

const checkForm = computed(() => {
  const allFilled = Object.values(AdmissionalFormFiles.value).every(
    (item: string | null | undefined) => item !== null && item !== undefined && item !== "",
  );
  const allFilled2 = Object.values(AdmissionalForm.value).every(
    (item: string | null | undefined) => item !== null && item !== undefined && item !== "",
  );

  if (allFilled) {
    return !allFilled2;
  }

  return !allFilled;
});

async function handleSubmit(e: Event) {
  e.preventDefault();

  alert("Formulário Enviado!");
}
</script>

<template>
  <div class="mt-5 card">
    <div class="card-header">
      <h2>Formulário de Admissão</h2>
    </div>
    <div class="card-body">
      <form enctype="multipart/form-data" @submit="handleSubmit">
        <BTabs content-class="mt-3 mb-3">
          <InfoPessoalView />
          <DadoComplementarView />
          <ArchivesView />
        </BTabs>
        <div class="d-flex flex-column">
          <button type="submit" class="btn btn-primary" :disabled="checkForm">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>
