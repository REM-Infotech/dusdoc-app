import { defineStore } from "pinia";
import { reactive, watch } from "vue";

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

  watch(AdmissionalForm, (newValue) => {
    AdmissionalForm.cep = newValue.cep
      .replace(/\D/g, "") // Remove tudo que não é número
      .replace(/^(\d{5})(\d{1,3})/, "$1-$2") // Aplica o formato 99999-999
      .substring(0, 9); // Garante no máximo 9 caracteres
    AdmissionalForm.telefone = newValue.telefone
      .replace(/\D/g, "") // Remove tudo que não for dígito
      .replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4}).*/, "($1) $2 $3-$4")
      .trim();
  });

  return {
    AdmissionalForm,
  };
});

export default admissionalStore;
