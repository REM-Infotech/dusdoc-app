<script setup lang="ts">
import "@/assets/scripts/color-modes.js";
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade">
      <div class="d-flex flex-column h-100" :key="route.name">
        <HeaderView class="mb-auto" v-if="route.name !== 'login'" />
        <component :is="Component" />
        <FooterView class="mt-auto" v-if="route.name !== 'login'" />
      </div>
    </Transition>
  </RouterView>
</template>
