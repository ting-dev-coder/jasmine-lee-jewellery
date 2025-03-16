<template>
  <q-page>
    <Banner
      :breadcrumbs="['Home', 'Collections', 'Silver Collection', 'Sterling Silver Hoop Earrings']"
    />
    <section class="q-pt-xl container items-center row q-col-md-gutter-lg">
      <q-carousel
        height="400px"
        class="col-12 col-md-6"
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        arrows
      >
        <q-carousel-slide
          v-for="(slider, idx) in sliders"
          :key="`slider-${idx}`"
          :name="idx"
          :img-src="slider"
        >
        </q-carousel-slide>
      </q-carousel>
      <div class="col-12 col-md-6 q-px-md q-px-md-none q-gutter-y-md">
        <h2 class="text-h3">Sterling Silver Hoop Earrings</h2>
        <span class="block text-h5">$150</span>
        <p class="text-weight-regular text-h5">
          Elevate your style with our Sterling Silver Hoop Earrings, a perfect blend of
          sophistication and everyday wearability. Designed for the modern minimalist, these hoops
          are handcrafted from high-quality sterling silver, offering a sleek and polished finish
          that complements any look.
        </p>
        <q-btn unelevated color="primary" text-color="black">add to cart</q-btn>
      </div>
    </section>
    <section class="q-py-xl container row q-col-md-gutter-md q-px-md q-px-md-none">
      <div class="col-12 col-lg-6 text-h5 text-weight-regular">
        <h3 class="q-pb-md text-h4">Product Details</h3>
        <p><strong>Material:</strong> 925 Sterling Silver</p>
        <p><strong>Size Options: </strong> [Small – 20mm, Medium – 30mm, Large – 50mm]r</p>
        <p>
          <strong>Finish:</strong>
          High Polish / Matte / Textured
        </p>
        <p><strong>Closure:</strong>Secure Latch Back / Hinged Snap</p>
        <p>Hypoallergenic & Tarnish-Resistant</p>
      </div>
      <div class="q-pt-xl q-pt-lg-none col-12 col-lg-6">
        <h3 class="text-h4">Reviews</h3>
        <p class="q-py-md">There are no reviews yet.</p>
        <strong>Be the first to review "Sterling Silver Hoop Earrings"</strong>
        <div class="q-py-lg">
          <p>Your Review</p>
          <q-rating v-model="ratingModel" size="2em" :max="5" color="primary" />
        </div>

        <q-form class="q-px-md q-px-lg-none q-col-gutter-md">
          <q-input
            filled
            bg-color="primary"
            v-model="form.name"
            label="Your Name"
            lazy-rules
            hide-bottom-space
            :rules="[(val) => (val && val.length > 0) || 'Please type name']"
          />

          <q-input
            filled
            bg-color="primary"
            hide-bottom-space
            type="email"
            v-model="form.email"
            label="Your Email"
            lazy-rules
            :rules="[(val) => (val !== null && val !== '') || 'Please type your email']"
          />
          <q-input bg-color="primary" v-model="form.message" filled type="textarea" />
          <div>
            <q-btn
              class="full-width"
              label="Submit"
              type="submit"
              text-color="black"
              color="primary"
              unelevated
            />
          </div>
        </q-form>
      </div>
    </section>
    <section class="container q-pb-xl">
      <h3 class="text-center q-py-lg">Related Products</h3>
      <div class="row q-col-gutter-md">
        <BaseCard
          class="col-12 col-sm-6 col-md-3"
          v-for="(work, idx) in CustomWork"
          :key="`other-${idx}`"
          flat
          :title="work.name"
          :price="work.price"
          img-path="custom5.jpg"
        />
      </div>
    </section>
  </q-page>
</template>
<script setup>
import Banner from 'src/components/Banner.vue'
import BaseCard from 'src/components/BaseCard.vue'
import { CustomWork } from 'src/data/customWork'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()
// const collectionId = route.params.id

// const Category = Categories.find((category) => category.collectionId === Number(collectionId))

// const OtherProducts = Category.categories.filter

const slide = ref(0)
const ratingModel = ref(0)
const form = ref({
  name: '',
  email: '',
  message: '',
})

const sliders = ['gemstone1.jpg', 'gemstone2.jpg', 'gemstone3.jpg']
</script>
