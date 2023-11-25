<template>
  <section>
    <div class="sort-by">
      <button :class="[currentList === 'all' ? 'btn-active' : '']" @click="sortBy('all')">All Products</button>
      <button :class="[currentList === 'available' ? 'btn-active' : '']" @click="sortBy('available')">Available Now</button>
    </div>

    <div class="list">

    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";

// const coffeList = ref([])
const currentList = ref('all')
const sortBy = (value) => {
  currentList.value = value
}
</script>

<style>
.sort-by {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btn-active {
  background: var(--gray);
  padding: 10px;
  border-radius: 10px;
}
</style>
