<script setup lang="ts">
import { piniaState } from "@/main";
import api from "@/resources/axios";
import admissionalStore from "@/stores/admissional";
import { useModal } from "bootstrap-vue-next";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import ArchivesView from "./tabs/ArchivesView.vue";
import DadoComplementarView from "./tabs/DadoComplementarView.vue";
import InfoPessoalView from "./tabs/InfoPessoalView.vue";
const router = useRouter();
const { AdmissionalForm, AdmissionalFormFiles } = storeToRefs(admissionalStore(piniaState));
const { show } = useModal("ModalLoading");

const formbusy = ref(false);

const checkForm = computed(() => {
  const allFilled = Object.values(AdmissionalFormFiles.value).every(
    (item: string | null | undefined) => {
      console.log(item);
      return item !== null && item !== undefined && item !== "";
    },
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const allFilled2 = Object.values(AdmissionalForm.value).every(
    (item: string | null | undefined) => item !== null && item !== undefined && item !== "",
  );

  if (allFilled) {
    return false;
  }

  return false;
});

async function handleSubmit(e: Event) {
  e.preventDefault();

  let pushRoute = false;

  try {
    setTimeout(() => {
      show();
    }, 200);
    setTimeout(async () => {
      const resp = await api.post(
        "/forms/admissional",
        {
          data: AdmissionalForm,
          files: AdmissionalFormFiles,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(resp);
    }, 5000);
    pushRoute = true;
  } catch (err) {
    console.log(err);
    alert(import.meta.env.VITE_API_URL);
  }

  if (pushRoute) {
    router.push({ name: "documents" });
  }
}
</script>

<template>
  <div class="mt-5 card">
    <div class="card-header">
      <h2>Formulário de Admissão</h2>
    </div>
    <div class="card-body">
      <form enctype="multipart/form-data" @submit="handleSubmit">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Informações Básicas
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Info. adicional
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Arquivos
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <InfoPessoalView />
          <DadoComplementarView />
          <ArchivesView />
        </div>

        <div class="d-flex flex-column">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="checkForm"
            @click="formbusy = !formbusy"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
