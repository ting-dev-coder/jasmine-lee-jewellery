<template>
  <section class="q-pt-xl">
    <h2>Our Best Sellers</h2>
    <div class="row">
      <div class="col row q-col-gutter-md">
        <div
          class="col-6"
          v-for="(item, idx) in BestSellers.slice(0, BestSellers.length)"
          :key="`beset-${idx}`"
        >
          <q-card>
            <img style="height: 160px" src="image-placeholder.png" />
            <div class="q-pa-sm">
              <h3>{{ item.title }}</h3>
              <span class="block q-py-sm">${{ item.price }}</span>
              <q-btn class="full-width">SHOP NOW</q-btn>
            </div>
          </q-card>
        </div>
      </div>
      <div class="col q-pl-md">
        <q-card class="column full-height">
          <img class="col" src="image-placeholder.png" />
          <q-btn class="full-width">SHOP NOW</q-btn>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BestSellers } from 'src/data/home'
</script>
