<template>
  <section class="q-pt-xl q-mb-xl container">
    <h2 class="text-h4 text-center q-pb-xxl">Our Best Sellers</h2>
    <div class="row">
      <div class="col row q-col-gutter-md">
        <div
          class="col-6"
          v-for="(item, idx) in BestSellers.slice(0, BestSellers.length)"
          :key="`beset-${idx}`"
        >
          <q-card class="full-height column">
            <img style="height: 160px" :src="item.image" />
            <div class="col q-pa-sm column bg-primary">
              <div class="col">
                <h3 class="text-h6">{{ item.title }}</h3>
                <span class="block q-py-sm text-overline">${{ item.price }}</span>
              </div>

              <q-btn class="full-width" unelevated>SHOP NOW</q-btn>
            </div>
          </q-card>
        </div>
      </div>
      <div class="col q-pl-md">
        <q-card class="column full-height">
          <img class="col" src="pearl6.jpg" />
          <q-btn color="primary" text-color="black" class="full-width" unelevated>SHOP NOW</q-btn>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BestSellers } from 'src/data/home'
</script>
