<script setup lang="ts">
import IconExample from "./components/icons/IconExample.vue";
import "@/assets/scss/main.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import InputView from "./components/styled/InputView.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

function handleSubmit(event: Event) {
  event.preventDefault();
  // Handle form submission logic here
  alert("Form submitted!");
  router.push({ name: "home" });
}
</script>

<template>
  <div
    class="shadow shadow-4 rounded rounded-4 d-grid p-3 align-items-center justify-content-center gap-5"
    style="height: 100%"
  >
    <div class="d-flex flex-column gap-2 justify-content-center align-items-center">
      <IconExample />
      <span class="fw-bold text-center"> Bem-vindo(a)! </span>
      <span class="text-body-tertiary text-center fw-semibold text-opacity-50">
        Acesse sua conta para visualizar ou enviar documentos
      </span>
    </div>
    <form @submit="handleSubmit" class="d-flex flex-column gap-3" style="height: 100%">
      <InputView type="text" label="Seu email" :value="form.email" :icon="faEnvelope" />
      <InputView type="password" label="Sua senha" :value="form.password" />
      <a class="text-decoration-none text-primary fw-semibold" href="#">Esqueceu sua senha?</a>
      <div class="d-flex flex-column mt-auto">
        <button type="submit" class="btn btn-primary">
          <span class="fw-bold">Entrar</span>
        </button>
      </div>
    </form>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <span class="text-center text-body-tertiary fw-semibold"> Ainda não possui uma conta? </span>
      <a class="text-center text-decoration-none" href="#">
        <span class="fw-bolder text-primary"> Solicite ao RH </span>
      </a>
    </div>
  </div>
</template>
