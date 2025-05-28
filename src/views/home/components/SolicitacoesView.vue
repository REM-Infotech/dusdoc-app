<script setup lang="ts">
import {
  faFileInvoice,
  faDownload,
  faIdCard,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div id="files">
    <div class="d-flex gap-0 justify-content-between align-items-center">
      <span class="ms-1 fs-5 fw-semibold">Documentos recentes</span>
      <a class="text-primary fw-semibold link-offset-3" href="#">Ver todos</a>
    </div>
    <div class="card mt-2 shadow shadow-4">
      <ul class="list-group">
        <li class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center">
              <div class="p-2 bg-primary rounded">
                <FontAwesomeIcon :icon="faFileInvoice" size="lg" color="white" />
              </div>
              <div class="d-grid gap-0 ms-2">
                <span class="fw-semibold" style="font-size: 0.9rem">Contracheque Maio/2025</span>
                <span class="text-secondary fw-semibold" style="font-size: 0.8rem">
                  Enviado em 21/05/2024
                </span>
              </div>
            </div>
            <a href="#" class="bg-opacity-25 rounded">
              <FontAwesomeIcon :icon="faDownload" size="2x" color="blue" />
            </a>
          </div>
        </li>
        <li class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center">
              <div class="p-1 bg-success rounded">
                <FontAwesomeIcon :icon="faIdCard" size="lg" color="white" />
              </div>
              <div class="d-grid gap-0 ms-2">
                <span class="fw-semibold" style="font-size: 0.9rem">Carteira Identificação</span>
                <span class="text-secondary fw-semibold" style="font-size: 0.8rem">
                  Atualizado em 21/05/2024
                </span>
              </div>
            </div>
            <a href="#" class="bg-opacity-25 rounded">
              <FontAwesomeIcon :icon="faDownload" size="2x" color="blue" />
            </a>
          </div>
        </li>
        <li class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center">
              <div class="p-2 bg-warning rounded" style="">
                <FontAwesomeIcon :icon="faFileContract" size="lg" color="white" />
              </div>
              <div class="d-grid gap-0 ms-2">
                <span class="fw-semibold" style="font-size: 0.9rem">Contrato de Experiência</span>
                <span class="text-secondary fw-semibold" style="font-size: 0.8rem">
                  Atualizado em 21/05/2024
                </span>
              </div>
            </div>
            <a href="#" class="bg-opacity-25 rounded">
              <FontAwesomeIcon :icon="faDownload" size="2x" color="blue" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
