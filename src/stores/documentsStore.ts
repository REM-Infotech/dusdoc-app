import { defineStore } from "pinia";
import { ref } from "vue";

const storeDocuments = defineStore("storeDocuments", () => {
  const solicitacoes = ref<Record<string, string>[]>([]);
  const files = ref<Record<string, string>[]>([]);
  return { solicitacoes, files };
});

export default storeDocuments;
