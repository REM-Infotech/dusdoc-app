<script setup lang="ts">
import "@/assets/scss/main.css";
import FooterView from "./FooterView.vue";
import HeaderView from "./HeaderView.vue";
</script>

<template>
  <HeaderView />
  <div id="page-container">
    <div id="content-wrap">
      <slot></slot>
    </div>
  </div>
  <FooterView id="footer" />
</template>

<style lang="css" scoped>
#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.5rem; /* Footer height */
}
</style>
