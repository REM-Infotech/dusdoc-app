<script setup lang="ts">
import "@/assets/scripts/color-modes.js";
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade">
      <div
        class="d-flex justify-content-center align-items-center vh-100"
        v-if="route.name === 'login'"
        :key="route.name"
      >
        <component :is="Component" />
      </div>
      <div v-else class="d-flex flex-column gap-2" style="height: 100vh">
        <HeaderView class="mb-auto" />
        <main>
          <component :is="Component" />
        </main>
        <FooterView class="mt-auto" />
      </div>
    </Transition>
  </RouterView>
</template>
