<script setup lang="ts">
import IconExample from "./icons/IconExample.vue";
import "@/assets/scss/main.css";
import InputView from "./styled/InputView.vue";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <main>
    <div class="container mt-4">
      <div
        class="shadow-lg p-4 mb-2 mt-auto bg-body-tertiary rounded d-grid justify-content-center align-items-center"
      >
        <div class="d-flex justify-content-center">
          <IconExample />
        </div>
        <div class="card-title mt-3 d-grid justify-content-center align-items-center">
          <span class="fw-bold text-center"> Bem-vindo(a)! </span>
          <span class="text-body-tertiary text-center fw-semibold text-opacity-50">
            Acesse sua conta para visualizar ou enviar documentos
          </span>
        </div>
        <div class="card-body">
          <form class="mt-4">
            <InputView type="text" label="Seu email" value="" :icon="faEnvelope" />
            <InputView type="password" label="Sua senha" value="" />
            <a class="mt-4 mb-4 text-decoration-none text-primary fw-bold" href="#"
              >Esqueceu sua senha?</a
            >
            <div class="d-grid">
              <button type="submit" class="mt-4 p-2 btn btn-primary">
                <span class="fw-bold">Submit</span>
              </button>
            </div>
          </form>
          <div class="d-grid justify-content-center align-items-center mt-4">
            <span class="text-center text-body-tertiary fw-semibold">
              Ainda não possui uma conta?
            </span>
            <a class="text-center text-decoration-none" href="#">
              <span class="fw-bolder text-primary"> Solicite ao RH </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
