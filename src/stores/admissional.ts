import { defineStore } from "pinia";
import { ref } from "vue";

const admissionalStore = defineStore("formAdmissional", () => {
  const genSelected = ref(null);
  const corRacaSelected = ref(null);
  const grauEscolarSelected = ref(null);
  const estadoCivilSelected = ref(null);

  return { genSelected, corRacaSelected, grauEscolarSelected, estadoCivilSelected };
});

export default admissionalStore;
