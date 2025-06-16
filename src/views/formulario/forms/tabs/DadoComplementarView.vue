<script setup lang="ts">
import { piniaState } from "@/main";
import admissionalStore from "@/stores/admissional";
import { storeToRefs } from "pinia";
import formSelect from "../resources/formSelect";

const { genOpt, corRacaOpt, grauEscolarOpt, estadoCivilOpt } = formSelect();

const { genSelected, corRacaSelected, grauEscolarSelected, estadoCivilSelected } = storeToRefs(
  admissionalStore(piniaState),
);
</script>

<template>
  <BTab title="Outras Info.">
    <div class="mb-3 card p-1">
      <label class="form-label p-1" for="genero"> Gênero </label>
      <BFormSelect id="genero" v-model="genSelected" :options="genOpt"> </BFormSelect>
    </div>
    <div class="mb-3 card p-1">
      <label class="form-label p-1" for="cor-raca"> Cor E Raça </label>
      <BFormSelect id="cor-raca" v-model="corRacaSelected" :options="corRacaOpt"> </BFormSelect>
    </div>
    <div class="mb-3 card p-1">
      <label class="form-label p-1" for="grau-escolar"> Grau Escolaridade </label>
      <BFormSelect id="grau-escolar" v-model="grauEscolarSelected" :options="grauEscolarOpt">
      </BFormSelect>
    </div>
    <div class="mb-3 card p-1">
      <label class="form-label p-1" for="estado-civil"> Estado civil </label>
      <BFormSelect id="estado-civil" v-model="estadoCivilSelected" :options="estadoCivilOpt">
      </BFormSelect>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="nome-pai" placeholder="Nome Pai" required />
      <label for="nome-pai" class="form-label"> Nome do Pai </label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="nome-mae" placeholder="Nome Mãe" required />
      <label for="nome-mae" class="form-label"> Nome da Mãe </label>
    </div>
  </BTab>
</template>
