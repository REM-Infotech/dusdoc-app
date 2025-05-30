<script setup lang="ts">
import "@/assets/scripts/color-modes.js";
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";
</script>

<template>
  <RouterView v-slot="{ Component, route }" class="d-flex flex-column h-100">
    <div class="d-flex flex-column h-100">
      <HeaderView class="mb-auto" />
      <Transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </Transition>
      <FooterView class="mt-auto" />
    </div>
  </RouterView>
</template>
