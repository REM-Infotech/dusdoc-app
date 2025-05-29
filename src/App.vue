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
      <div class="d-flex flex-column" :key="route.name" style="height: 100%">
        <HeaderView class="mb-auto" v-if="route.name !== 'login'" />
        <HeaderLoginView class="mt-auto mb-auto pt-3 pb-3" v-else />
        <component :is="Component" />
        <FooterView class="mt-auto" v-if="route.name !== 'login'" />
        <FooterLoginView class="mb-auto mt-auto pt-3 pb-3" v-else />
      </div>
    </Transition>
  </RouterView>
</template>
