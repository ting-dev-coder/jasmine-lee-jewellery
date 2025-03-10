<template>
  <q-page>
    <section class="container row q-col-gutter-lg">
      <q-carousel
        class="col bg-primary text-white shadow-1 rounded-borders"
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
      >
        <!-- <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="image-placeholder.png" />
        </q-carousel-slide> -->
        <q-carousel-slide
          v-for="(slid, idx) in 5"
          :key="`slider-${idx}`"
          :name="idx"
          class="column no-wrap flex-center"
        >
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis corrupti facilis
            perspiciatis repellendus distinctio facere dolorum quas sunt reiciendis, sequi,
            asperiores sed iure vitae? Deleniti numquam fugiat voluptates saepe placeat.
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="col q-gutter-y-md">
        <h2>Sterling Silver Hoop Earrings</h2>
        <span class="block">$150</span>
        <p>
          Elevate your style with our Sterling Silver Hoop Earrings, a perfect blend of
          sophistication and everyday wearability. Designed for the modern minimalist, these hoops
          are handcrafted from high-quality sterling silver, offering a sleek and polished finish
          that complements any look.
        </p>
        <q-btn>add to cart</q-btn>
      </div>
    </section>
    <section class="q-py-xl container row q-col-gutter-md">
      <div class="col">
        <h3 class="q-pb-md">Product Details</h3>
        <p><strong>Material:</strong> 925 Sterling Silver</p>
        <p><strong>Size Options: </strong> [Small – 20mm, Medium – 30mm, Large – 50mm]r</p>
        <p>
          <strong>Finish:</strong>
          High Polish / Matte / Textured
        </p>
        <p><strong>Closure:</strong>Secure Latch Back / Hinged Snap</p>
        <p>Hypoallergenic & Tarnish-Resistant</p>
      </div>
      <div class="col">
        <h3>Reviews</h3>
        <p class="q-py-md">There are no reviews yet.</p>
        <bold>Be the first to review "Sterling Silver Hoop Earrings"</bold>
        <div class="q-py-lg">
          <p>Your Review</p>
          <q-rating v-model="ratingModel" size="2em" :max="5" color="primary" />
        </div>

        <q-form class="q-gutter-md">
          <q-input
            filled
            v-model="form.name"
            label="Your Name"
            lazy-rules
            hide-bottom-space
            :rules="[(val) => (val && val.length > 0) || 'Please type name']"
          />

          <q-input
            filled
            hide-bottom-space
            type="email"
            v-model="form.email"
            label="Your Email"
            lazy-rules
            :rules="[(val) => (val !== null && val !== '') || 'Please type your email']"
          />
          <div>
            <q-btn class="full-width" label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </section>
    <section class="container q-pb-xl">
      <h3 class="text-center q-py-lg">Related Products</h3>
      <div class="row q-col-gutter-md">
        <BaseCard
          class="col-3"
          v-for="(work, idx) in CustomWork"
          :key="`other-${idx}`"
          flat
          :title="work.name"
          :price="work.price"
          :img-path="work.imagePath"
        />
      </div>
    </section>
  </q-page>
</template>
<script setup>
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
})
</script>
