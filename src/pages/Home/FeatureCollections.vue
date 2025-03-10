<template>
  <section>
    <q-list class="row q-col-gutter-md">
      <q-card
        class="col-4"
        v-for="(collection, idx) in FeatureCollections"
        :key="`feature-${idx}`"
        flat
      >
        <q-item class="relative-position q-pa-none">
          <img class="full-width" src="image-placeholder.png" />
          <q-item class="absolute-bottom full-width">
            <p class="full-width text-center">{{ collection.name }}</p>
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
