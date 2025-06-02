<script setup lang="ts">
import IconExample from "./components/icons/IconExample.vue";
import "@/assets/scss/main.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import InputView from "./components/styled/InputView.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import api from "@/resources/axios";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});

async function handleSubmit(event: Event) {
  event.preventDefault();

  try {
    const response = await api.post("/auth/login", {
      email: form.email,
      password: form.password,
    });

    // Handle successful login
    console.log("Login successful:", response.data);
    router.push({ name: "home" });
  } catch (error) {
    // Handle login error
    console.error("Login failed:", error);
  }
}
</script>

<template>
  <div
    class="login-card d-flex flex-column gap-3 shadow-lg me-3 ms-3 p-3 rounded rounded-4 mb-auto mt-auto"
  >
    <div class="d-flex gap-4 justify-content-center align-items-center">
      <div class="d-flex flex-column gap-2 justify-content-center align-items-center">
        <IconExample />
      </div>
    </div>
    <form @submit="handleSubmit" class="d-flex flex-column gap-4">
      <div class="d-flex gap-2 flex-column">
        <InputView type="text" label="Email" :value="form.email" :icon="faEnvelope" />
        <InputView type="password" label="Senha" :value="form.password" />
      </div>
      <a class="text-decoration-none text-primary fw-semibold" href="#">Esqueceu sua senha?</a>
      <div class="d-grid">
        <button type="submit" class="btn btn-primary">
          <span class="fw-bold">Entrar</span>
        </button>
      </div>
    </form>
    <div class="d-flex flex-column justify-content-center align-items-center grap-5">
      <span class="text-center text-body-tertiary fw-semibold"> Ainda não possui uma conta? </span>
      <a class="text-center text-decoration-none" href="#">
        <span class="fw-bolder text-primary"> Solicite ao RH </span>
      </a>
    </div>
  </div>
</template>
