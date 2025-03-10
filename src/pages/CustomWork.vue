<template>
  <q-page>
    <Banner title="Custom Work" :breadcrumbs="['Home', 'Custom Work']" />
    <section class="container row q-col-gutter-md">
      <div class="col column justify-center q-gutter-y-lg">
        <h3>Custom Jewellery: Crafted Just for You</h3>
        <p>
          Design a piece that tells your unique story. Work closely with Jasmine Lee to create a
          one-of-a-kind jewellery piece, from engagement rings to special keepsakes, made with
          high-quality materials and expert craftsmanship.
        </p>
      </div>
      <img class="col" src="image-placeholder.png" />
    </section>
    <section class="q-pt-xl row container q-col-gutter-md">
      <h3 class="col-12 text-center">Our Custom Collection</h3>
      <div class="col-3" v-for="(work, idx) in CustomWork" :key="`work-${idx}`">
        <BaseCard :title="work.name" :price="work.price" :img-path="work.imagePath" />
      </div>
      <div class="col-12 q-py-xl text-center">
        <q-btn>View all</q-btn>
      </div>
    </section>
    <section class="q-pb-xl row container q-col-gutter-md">
      <h3 class="col-12 text-center q-pb-lg">Our Custom Jewellery Process</h3>
      <div class="col-6" v-for="(item, idx) in process" :key="`process-${idx}`">
        <q-card flat bordered>
          <q-card-section class="bg-grey-5"> {{ idx + 1 }}. {{ item.step }} </q-card-section>
          <q-card-section>
            {{ item.content }}
          </q-card-section>
        </q-card>
      </div>
    </section>
  </q-page>
</template>
<script setup lang="ts">
import Banner from 'src/components/Banner.vue'
import BaseCard from 'src/components/BaseCard.vue'
import { CustomWork } from 'src/data/customWork'

const process = [
  {
    step: 'Consultation',
    content:
      "Discuss your ideas and vision with Jasmine. We'll explore design options and material preferences.",
  },
  {
    step: 'Design & Sketching',
    content: 'We create sketches and refine the design until it matches your vision perfectly.',
  },
  {
    step: 'Material Selection',
    content:
      'Choose the finest metals, gemstones, and other materials to bring your design to life.',
  },
  {
    step: 'Crafting & Final Approval',
    content:
      "Our artisans craft your piece with precision. Once complete, we'll review it with you to ensure it's perfect before delivery.",
  },
]
</script>
