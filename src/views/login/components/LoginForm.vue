<script setup lang="ts">
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import InputView from "./styled/InputView.vue";
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
  <form @submit="handleSubmit" class="d-flex flex-column gap-2">
    <InputView type="text" label="Seu email" :value="form.email" :icon="faEnvelope" />
    <InputView type="password" label="Sua senha" :value="form.password" />
    <a class="text-decoration-none text-primary fw-bold" href="#">Esqueceu sua senha?</a>
    <div class="d-grid">
      <button type="submit" class="p-2 btn btn-primary">
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
</template>
