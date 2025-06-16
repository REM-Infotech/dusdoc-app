import { defineStore } from "pinia";
import { reactive } from "vue";

const admissionalStore = defineStore("formAdmissional", () => {
  const AdmissionalForm = reactive({
    nome: "",
    cpf: "",
    email: "",
    data_nascimento: "",
    telefone: "",
    endereco: "",
    complemento: "",
    cidade: "",
    cep: "",
    estado: "",
    genero: null,
    corRaca: null,
    grauEscolaridade: null,
    estadoCivil: null,
  });

  return {
    AdmissionalForm,
  };
});

export default admissionalStore;
