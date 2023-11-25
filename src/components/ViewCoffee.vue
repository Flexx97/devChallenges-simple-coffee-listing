<template>
  <section>
    <div class="sort-by">
      <button :class="[currentList === 'all' ? 'btn-active' : '']" @click="sortBy('all')">All Products</button>
      <button :class="[currentList === 'available' ? 'btn-active' : '']" @click="sortBy('available')">Available Now</button>
    </div>

    <div class="list" v-if="listItems" >
      <main-card
        v-for="item in listsItemsComputed"
        :key="item.id"
        :available="item.available"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :popular="item.popular"
        :rating="item.rating"
        :votes="item.votes"
      ></main-card>
    </div>

  </section>
</template>

<script setup>
import {ref, onBeforeMount, computed} from 'vue'
import { useFetch } from '@/composable/useFetch'
import MainCard from '@/components/MainCard.vue'

const listItems = ref(null)
const listsItemsComputed = computed(() => {
  if (currentList.value === 'available') {
    return listItems.value.filter((card) => card.available)
  }

  return listItems.value
})
const currentList = ref('all')
const sortBy = (value) => {
  currentList.value = value
}

onBeforeMount(async () => {
  listItems.value = await useFetch('GET', 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
})
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

.list {
  margin-top: 50px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
}
</style>
