<script setup lang="ts">
import admissionalStore from "@/stores/admissional";

const { genSelected } = admissionalStore();
</script>
<template>
  <BTab title="Arquivos">
    <div class="card mb-3">
      <div class="card-header">
        <span> RG ou CNH </span>
      </div>
      <div class="card-body">
        <BFormFile />
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <span> Comprovante de Residência </span>
      </div>
      <div class="card-body">
        <BFormFile />
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <span> Titulo Eleitor </span>
      </div>
      <div class="card-body">
        <BFormFile />
      </div>
    </div>
    <div class="card mb-3" v-if="genSelected == 'M'">
      <div class="card-header">
        <span> Certidão Reservista </span>
      </div>
      <div class="card-body">
        <BFormFile />
      </div>
    </div>
  </BTab>
</template>
