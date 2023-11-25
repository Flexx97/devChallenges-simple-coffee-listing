<template>
  <div class="card">
    <img class="card-image" :src="props.image" :alt="props.name">

    <div class="card-info">
      <h6 class="card-info-label">{{ props.name }}</h6>
      <span class="card-info-price">{{ props.price }}</span>
    </div>

    <div class="card-ratings">
      <img :src="props.rating ? StarFillIcon : StarIcon" alt="star">
      <span :class="[!props.rating ? 'card-ratings-none' : '']">{{ props.rating ?? 'No ratings' }}</span>
      <span class="card-ratings-votes" v-show="props.votes > 0">({{ props.votes }} votes)</span>
      <span class="card-settings-soldOut" v-if="!props.available">Sold out</span>
    </div>
  </div>
</template>

<script setup>
import StarFillIcon from '@/assets/images/star_fill.svg'
import StarIcon from '@/assets/images/star.svg'

const props = defineProps({
  id: Number,
  name: String,
  image: String,
  price: String,
  available: Boolean,
  popular: Boolean,
  rating: Number,
  votes: Number
})
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-image {
  border-radius: var(--radius);
}

.card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-info-label {
  margin: 0;
  font-size: var(--size-body)
}

.card-info-price {
  padding: 3px 7px;
  background: var(--green);
  color: var(--background-color);
  font-size: var(--size-price-text);
  font-weight: 600;
  border-radius: 5px;
}

.card-ratings {
  display: grid;
  grid-template-columns: repeat(3, fit-content(100%)) 1fr;
  align-items: center;
  font-size: var(--size-label);
  font-weight: 600;
}

.card-ratings img {
  margin-right: 5px;
}

.card-settings-soldOut {
  justify-self: end;
  color: var(--red);
}

.card-ratings-votes {
  color: var(--gray);
}

.card-ratings-none {
  color: var(--gray);
}
</style>
