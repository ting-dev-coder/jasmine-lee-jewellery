<template>
  <q-page>
    <Banner title="Contact" :breadcrumbs="['Home', 'Contact']" />

    <div class="q-mb-xl q-pa-md q-mx-auto" style="max-width: 550px">
      <h3 class="text-center q-pb-xl">Drop a Messemail</h3>
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
          v-model="form.subject"
          label="Subject"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Please type your subject']"
        />
        <q-input
          v-model="form.message"
          filled
          type="textarea"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Please type your message']"
        />
        <div>
          <q-btn class="full-width" label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
    <div class="bg-grey-3 q-py-xl q-col-gutter-md">
      <div class="container row">
        <div class="col text-center">
          <q-icon class="q-mr-md" name="phone" size="md" />(123) 456-7890
        </div>
        <div class="col text-center">
          <q-icon class="q-mr-md" name="email" size="md" />xyz@example.com
        </div>
        <div class="col text-center">
          <q-icon class="q-mr-md" name="timer" size="md" />Mon - Fri: 7A.M - 6 P.M
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Banner from 'src/components/Banner.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})
function onSubmit() {}
</script>
