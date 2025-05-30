<script setup lang="ts">
import { StyledDiv } from "@/components/styled";
</script>

<template>
  <StyledDiv id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner bg-primary rounded rounded-4">
      <div class="carousel-item active bg-blue">
        <div class="card bg-primary" style="height: 200px">teste</div>
      </div>
      <div class="carousel-item bg-blue">
        <div class="card bg-success" style="height: 200px"></div>
      </div>
      <div class="carousel-item bg-blue">
        <div class="card bg-warning" style="height: 200px"></div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="visually-hidden">Next</span>
    </button>
  </StyledDiv>
</template>
