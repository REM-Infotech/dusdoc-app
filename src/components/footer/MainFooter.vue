<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBell, faFolderOpen, faUser } from "@fortawesome/free-regular-svg-icons";
import { RouterLink } from "vue-router";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <footer class="rounded-top-4 shadow-lg mt-auto" style="zoom: 75%">
    <div
      class="container text-center ps-5 pe-5 py-3 d-flex justify-content-between align-items-start"
    >
      <RouterLink
        :to="{ name: 'home' }"
        class="d-flex flex-column gap-2 text-decoration-none link-body-emphasis"
        href="#"
      >
        <FontAwesomeIcon :icon="faHouseLaptop" size="2x" />
        Home
      </RouterLink>
      <RouterLink
        :to="{ name: 'documents' }"
        class="d-flex flex-column gap-2 text-decoration-none link-body-emphasis"
        href="#"
      >
        <FontAwesomeIcon :icon="faFolderOpen" size="2x" />
        Documentos
      </RouterLink>
      <a class="d-flex flex-column gap-2 text-decoration-none link-body-emphasis" href="#">
        <FontAwesomeIcon :icon="faBell" size="2x" />
        Avisos
      </a>
      <a class="d-flex flex-column gap-2 text-decoration-none link-body-emphasis" href="#">
        <FontAwesomeIcon :icon="faUser" size="2x" />
        Perfil
      </a>
    </div>
  </footer>
</template>
