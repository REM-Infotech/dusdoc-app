<script setup lang="ts">
import "@/assets/scripts/color-modes.js";
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";
import HeaderLoginView from "./components/HeaderLoginView.vue";
import FooterLoginView from "./components/FooterLoginView.vue";
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade">
      <div class="d-flex flex-column h-100" :key="route.name">
        <HeaderView class="mb-auto" v-if="route.name !== 'login'" />
        <HeaderLoginView class="mt-auto mb-auto pt-2" v-else />
        <component :is="Component" />
        <FooterView class="mt-auto" v-if="route.name !== 'login'" />
        <FooterLoginView class="mb-auto mt-auto pb-2" v-else />
      </div>
    </Transition>
  </RouterView>
</template>
