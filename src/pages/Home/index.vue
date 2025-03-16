<template>
  <q-page class="q-mt-xl q-mx-auto">
    <div class="row container">
      <q-img style="min-height: min(70vh, 746px)" class="col" src="banner1.jpg" />
      <section class="col q-pl-xl column justify-center">
        <h2 class="text-h3">Timeless Elegance, Crafted Just for You</h2>
        <p class="q-py-md text-subtitle1">
          Discover the beauty of handcrafted jewelry with Jasmine Lee’s stunning collections and
          custom designs, made to reflect your unique style.
        </p>
        <q-btn class="self-start" color="primary" unelevated>Explore Our Collections</q-btn>
      </section>
    </div>
    <FeatureCollections />
    <CallToAction />
    <BestSeller />
  </q-page>
</template>

<script setup>
import BestSeller from './BestSeller.vue'
import CallToAction from './CallToAction.vue'
import FeatureCollections from './FeatureCollections.vue'

//
</script>
