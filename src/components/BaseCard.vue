<template>
  <q-card class="full-height column">
    <img style="height: 200px" :src="imgPath" />
    <div class="q-px-md q-py-sm bg-yellow col column">
      <h3 class="text-h6 text-weight-regular">{{ title }}</h3>
      <span class="col block q-py-sm text-overline">${{ price }}</span>
      <q-btn align="left" class="q-px-none full-width" flat>SHOP NOW</q-btn>
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
