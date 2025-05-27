<script setup lang="ts">
import "@/assets/scripts/color-modes.js";
import MainView from "./components/MainView.vue";
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade">
      <div :key="route.name">
        <div v-if="route.name === 'login'">
          <component :is="Component" />
        </div>
        <div v-else>
          <MainView>
            <component :is="Component" />
          </MainView>
        </div>
      </div>
    </Transition>
  </RouterView>
</template>
