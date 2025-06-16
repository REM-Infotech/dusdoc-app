import { defineStore } from "pinia";
import { reactive, watch } from "vue";

function isOver14(dateString: string) {
  const birthDate = new Date(dateString);
  const today = new Date();

  // Calcula a diferença de anos
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  // Ajusta se ainda não fez aniversário este ano
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 14;
}

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
    AdmissionalForm.cpf = newValue.cpf
      .replace(/\D/g, "") // Remove tudo que não for dígito
      .replace(/^(\d{3})\.?(\d{3})\.?(\d{3})-?(\d{2})/, "$1.$2.$3-$4")
      .trim();

    if (newValue.data_nascimento && !isOver14(newValue.data_nascimento)) {
      alert("Insira uma data de nascimento válida!");
      AdmissionalForm.data_nascimento = "";
    }
  });

  return {
    AdmissionalForm,
  };
});

export default admissionalStore;
