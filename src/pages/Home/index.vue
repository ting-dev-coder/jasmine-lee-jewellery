<template>
  <q-page class="q-mt-xl q-mx-auto container">
    <div class="row">
      <q-img class="col" src="image-placeholder.png" />
      <section class="col q-pl-xl column justify-center">
        <h2>Timeless Elegance, Crafted Just for You</h2>
        <p class="q-py-sm">
          Discover the beauty of handcrafted jewelry with Jasmine Lee’s stunning collections and
          custom designs, made to reflect your unique style.
        </p>
        <q-btn class="self-start">Explore Our Collections</q-btn>
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
