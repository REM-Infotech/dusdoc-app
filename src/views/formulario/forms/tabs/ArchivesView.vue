<script setup lang="ts">
import { piniaState } from "@/main";
import admissionalStore from "@/stores/admissional";
import { storeToRefs } from "pinia";

const { genSelected, estadoCivilSelected } = storeToRefs(admissionalStore(piniaState));
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
        <span> CTPS (Carteira de Trabalho) </span>
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
    <div class="card mb-3" v-if="genSelected == 'Masculino'">
      <div class="card-header">
        <span> Certidão Reservista </span>
      </div>
      <div class="card-body">
        <BFormFile />
      </div>
    </div>
    <div class="card mb-3" v-if="estadoCivilSelected == 'Casado'">
      <div class="card-header">
        <span> Certidão de Casamento </span>
      </div>
      <div class="card-body">
        <BFormFile />
      </div>
    </div>
    <div class="card mb-3" v-if="estadoCivilSelected == 'Divorciado'">
      <div class="card-header">
        <span> Certidão de Divórcio </span>
      </div>
      <div class="card-body">
        <BFormFile />
      </div>
    </div>
  </BTab>
</template>
