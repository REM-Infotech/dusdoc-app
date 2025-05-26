<script setup lang="ts">
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import InputView from "./styled/InputView.vue";
</script>

<template>
  <form class="mt-4">
    <InputView type="text" label="Seu email" value="" :icon="faEnvelope" />
    <InputView type="password" label="Sua senha" value="" />
    <a class="mt-4 mb-4 text-decoration-none text-primary fw-bold" href="#">Esqueceu sua senha?</a>
    <div class="d-grid">
      <button type="submit" class="mt-4 p-2 btn btn-primary">
        <span class="fw-bold">Entrar</span>
      </button>
    </div>
  </form>
  <div class="d-grid justify-content-center align-items-center mt-4">
    <span class="text-center text-body-tertiary fw-semibold"> Ainda não possui uma conta? </span>
    <a class="text-center text-decoration-none" href="#">
      <span class="fw-bolder text-primary"> Solicite ao RH </span>
    </a>
  </div>
</template>
