<script setup lang="ts">
import { piniaState } from "@/main";
import api from "@/resources/axios";
import admissionalStore from "@/stores/admissional";
import { BOverlay, useModal } from "bootstrap-vue-next";
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

const onFormOverlayShown = () => {
  // In this case, we return focus to the submit button
  // You may need to alter this based on your application requirements
};

const onFormOverlayHidden = () => {
  // In this case, we return focus to the submit button
  // You may need to alter this based on your application requirements
};
</script>

<template>
  <div class="mt-5 card">
    <div class="card-header">
      <h2>Formulário de Admissão</h2>
    </div>
    <div class="card-body">
      <BOverlay :show="formbusy" no-wrap @shown="onFormOverlayShown" @hidden="onFormOverlayHidden">
        <form enctype="multipart/form-data" @submit="handleSubmit">
          <BTabs content-class="mt-3 mb-3">
            <InfoPessoalView />
            <DadoComplementarView />
            <ArchivesView />
          </BTabs>
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
      </BOverlay>
    </div>
  </div>
</template>
