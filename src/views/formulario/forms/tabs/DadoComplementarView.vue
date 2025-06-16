<script setup lang="ts">
import admissionalStore from "@/stores/admissional";
import formSelect from "../resources/formSelect";

const { genOpt, corRacaOpt, grauEscolarOpt, estadoCivilOpt } = formSelect();

const { genSelected, corRacaSelected, grauEscolarSelected, estadoCivilSelected } =
  admissionalStore();
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
      <input
        type="text"
        class="form-control"
        id="nome"
        placeholder="Digite o nome completo"
        required
      />
      <label for="nome" class="form-label"> Cor E Raça </label>
    </div>
  </BTab>
</template>
