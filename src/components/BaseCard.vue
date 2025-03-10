<template>
  <q-card>
    <img style="height: 200px" :src="imgPath" />
    <div class="q-px-md q-py-sm bg-grey-5">
      <h3>{{ title }}</h3>
      <span class="block q-py-sm">${{ price }}</span>
      <q-btn class="full-width" flat>SHOP NOW</q-btn>
    </div>
  </q-card>
</template>

<script setup>
defineProps({
  imgPath: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: [String, Number],
  },
  to: {
    type: String,
  },
})
</script>
