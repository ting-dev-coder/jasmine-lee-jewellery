<template>
  <footer>
    <div class="bg-grey-4">
      <SubscribeBanner />

      <div class="row container q-mx-auto q-py-xl q-gutter-md">
        <div class="col">
          <h4>Discover More</h4>
          <p class="q-py-md">
            Explore the artistry behind Jasmine Lee jewelry. From handcrafted collections to custom
            designs, discover the inspiration, materials, and craftsmanship that make each piece
            unique.
          </p>
        </div>
        <div class="col">
          <h4 class="q-pb-xs">Quick Links</h4>
          <ul class="column q-pt-none q-gutter-y-sm items-start">
            <q-btn
              class="q-px-none"
              dense
              flat
              v-for="(item, idx) in menu"
              :key="`menu-${idx}`"
              :to="item.path"
              >{{ item.label }}</q-btn
            >
          </ul>
        </div>
        <div class="col">
          <h4 class="q-pb-md">Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.0149905599164!2d-124.97575801114499!3d49.7105195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548813c40dbd7447%3A0xd96b1fbbde947996!2sNorth%20Island%20College!5e0!3m2!1sen!2sca!4v1741619690480!5m2!1sen!2sca"
            width="100%"
            height="220"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="bg-grey-5">
      <p class="container q-py-sm q-mx-auto text-center">
        © 2025 Jasmine Lee jewelry. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import SubscribeBanner from '../SubscribeBanner.vue'

const menu = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Collections',
    path: '/collections',
  },
  {
    label: 'Custom Work',
    path: '/custom-work',
  },
  {
    label: 'Book a Consultation',
    path: '/book-consultation',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]
</script>
