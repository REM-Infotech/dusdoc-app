<script setup lang="ts">
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="mt-5" id="files">
    <div class="d-flex gap-0 justify-content-between align-items-center">
      <span class="ms-1 fs-5 fw-semibold">Documentos recentes</span>
      <a class="text-primary fw-semibold link-offset-3" href="#">Ver todos</a>
    </div>
    <div class="card mt-2">
      <ul class="list-group">
        <li class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-start align-items-center">
              <div class="p-2 bg-primary bg-opacity-25 rounded">
                <FontAwesomeIcon :icon="faFile" size="3x" color="white" />
              </div>
            </div>
          </div>
        </li>
        <li class="list-group-item" style="height: 8.7dvh">A second item</li>
        <li class="list-group-item" style="height: 8.7dvh">A third item</li>
      </ul>
    </div>
  </div>
</template>
