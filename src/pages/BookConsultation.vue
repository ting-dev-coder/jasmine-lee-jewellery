<template>
  <q-page class="q-mb-xl">
    <Banner title="Book a Consultation" :breadcrumbs="['Home', 'Book a Consultation']" />

    <div class="q-pa-md q-mx-auto" style="max-width: 550px">
      <h3 class="text-center q-pb-xl">Start Your Custom Jewellery Journey</h3>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="form.name"
          label="Your Name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type name']"
        />

        <q-input
          filled
          type="email"
          v-model="form.email"
          label="Your Email"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Please type your email']"
        />
        <q-input
          filled
          type="text"
          v-model="form.phone"
          label="Phone Number"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Please type your phone']"
        />
        <q-input
          v-model="form.message"
          filled
          type="textarea"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Please type your message']"
        />
        <q-date v-model="form.date" first-day-of-week="1" />
        <div>
          <q-btn class="full-width" label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import Banner from 'src/components/Banner.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  budget: '',
  message: '',
  date: '',
})
console.log(
  new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
)
function onSubmit() {}
</script>
