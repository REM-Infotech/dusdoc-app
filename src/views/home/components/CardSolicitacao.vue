<script setup lang="ts">
import { StyledDiv } from "@/components/styled";
</script>

<template>
  <StyledDiv
    id="carouselExampleSlidesOnly"
    class="carousel mt-3 shadow shadow-4 rounded rounded-4"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner bg-primary">
      <div class="carousel-item active bg-blue">
        <div class="card bg-primary">teste</div>
      </div>
      <div class="carousel-item bg-blue">
        <div class="card bg-primary"></div>
      </div>
      <div class="carousel-item bg-blue">
        <div class="card bg-primary"></div>
      </div>
    </div>
  </StyledDiv>
</template>
