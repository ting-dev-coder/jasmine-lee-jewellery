<template>
  <q-page>
    <Banner title="Custom Work" :breadcrumbs="['Home', 'Custom Work']" />
    <section class="container row q-col-gutter-md q-mb-xxl">
      <div class="col-12 col-md-6 column justify-center q-gutter-y-lg">
        <h3 class="text-h3">Custom Jewelry: Crafted Just for You</h3>
        <p class="text-content">
          Design a piece that tells your unique story. Work closely with Jasmine Lee to create a
          one-of-a-kind jewelry piece, from engagement rings to special keepsakes, made with
          high-quality materials and expert craftsmanship.
        </p>
        <q-btn class="self-start" color="primary" text-color="black" to="book-consultation"
          >Book a Consultation</q-btn
        >
      </div>
      <img class="col-12 col-md-6" src="custom1.jpg" />
    </section>
    <section class="bg-yellow-4 q-my-xxl">
      <div class="q-pt-xl q-px-md row container q-col-gutter-md q-mb-xl">
        <h3 class="col-12 text-center text-h4 q-pb-lg">Our Custom Collection</h3>
        <div class="col-12 col-md-3" v-for="(work, idx) in CustomWork" :key="`work-${idx}`">
          <BaseCard :title="work.name" :price="work.price" img-path="custom5.jpg" />
        </div>
        <div class="col-12 q-py-xl text-center">
          <q-btn class="q-px-xxl" color="primary" text-color="black">View all</q-btn>
        </div>
      </div>
    </section>

    <section class="q-pb-xl row container q-col-gutter-md">
      <h3 class="col-12 text-center q-pb-lg q-mb-xxl text-h4">Our Custom jewelry Process</h3>
      <div class="col-12 col-md-6" v-for="(item, idx) in process" :key="`process-${idx}`">
        <q-card flat bordered>
          <q-card-section class="bg-primary text-content">
            {{ idx + 1 }}. {{ item.step }}
          </q-card-section>
          <q-card-section class="text-h6 text-weight-regular">
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
