<template>
  <div class="container">
    <header class="header">
      <h1>Our Collection</h1>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
    </header>
    <view-coffee></view-coffee>
  </div>
</template>

<script setup>
import ViewCoffee from '@/components/ViewCoffee.vue'
</script>

<style>
.container {
  width: 70%;
  max-width: 900px;
  margin: 5rem auto 0;
  padding: 2rem 0;
  border-radius: var(--radius);
  background: var(--bacground-container);
}

.header {
  max-width: 55%;
  margin: 0 auto;
  padding-top: 1.5rem;
  background-image: url("@/assets/images/vector.svg");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: top right;
}

</style>
