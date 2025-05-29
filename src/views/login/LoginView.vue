<script setup lang="ts">
import IconExample from "./components/icons/IconExample.vue";
import "@/assets/scss/main.css";
import LoginForm from "./components/LoginForm.vue";
</script>

<template>
  <main>
    <div class="container">
      <div
        class="shadow-lg p-4 mt-auto bg-body-tertiary rounded d-flex flex-column gap-2 justify-content-center align-items-center"
      >
        <div class="d-flex justify-content-center">
          <IconExample />
        </div>
        <div class="card-title d-flex flex-column gap-2 justify-content-center align-items-center">
          <span class="fw-bold text-center"> Bem-vindo(a)! </span>
          <span class="text-body-tertiary text-center fw-semibold text-opacity-50">
            Acesse sua conta para visualizar ou enviar documentos
          </span>
        </div>
        <div class="card-body d-flex flex-column gap-2">
          <LoginForm />
        </div>
      </div>
    </div>
  </main>
</template>
