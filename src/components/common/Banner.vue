<template>
  <div class="banner">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../img/banner1.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../img/banner2.jfif" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../img/banner3.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.banner {
  padding-bottom: 50px;
}

.carousel-inner img {
  width: 100%;
  height: auto;
}


@media (max-width: 768px) {
  .carousel-inner {
    width: 36%;
  }
  .carousel-inner img {
  width: 100%;
  height: auto;
}
  .banner {
    padding-bottom: 0px;
  }
  .carousel-inner img {
    object-fit: cover;
  }
}
</style>
