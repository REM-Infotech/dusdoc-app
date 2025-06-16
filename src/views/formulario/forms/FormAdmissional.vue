<script setup lang="ts">
import ArchivesView from "./tabs/ArchivesView.vue";
import DadoComplementarView from "./tabs/DadoComplementarView.vue";
import InfoPessoalView from "./tabs/InfoPessoalView.vue";
</script>

<template>
  <div class="mt-5 card">
    <div class="card-header">
      <h2>Formulário de Admissão</h2>
    </div>
    <div class="card-body">
      <form>
        <BTabs content-class="mt-3 mb-3">
          <InfoPessoalView />
          <DadoComplementarView />
          <ArchivesView />
        </BTabs>
        <div class="d-flex flex-column">
          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>
