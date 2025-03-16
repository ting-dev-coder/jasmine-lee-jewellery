<template>
  <section class="q-mt-xxl bg-secondary q-py-xl">
    <h3 class="text-h4 text-center q-pb-xl">Featured Collection</h3>
    <q-list class="row q-col-gutter-md container q-pb-xxl">
      <q-card
        class="col-4 bg-transparent"
        v-for="(collection, idx) in FeatureCollections"
        :key="`feature-${idx}`"
        flat
      >
        <q-item class="relative-position q-pa-none">
          <img class="full-width" style="height: 220px" :src="collection.image" />
          <q-item style="bottom: 20px" class="absolute-bottom full-width text-h5">
            <p class="full-width">{{ collection.name }}</p>
          </q-item>
        </q-item>
        <q-btn color="primary" class="full-width">SHOP NOW</q-btn>
      </q-card>
    </q-list>
  </section>
</template>
<script setup>
import { FeatureCollections } from 'src/data/home'
</script>
