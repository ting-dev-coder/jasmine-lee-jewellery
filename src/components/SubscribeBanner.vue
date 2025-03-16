<template>
  <section class="row q-py-xl bg-yellow-2">
    <div class="row container q-mx-auto q-col-gutter-md">
      <div class="col-12 col-md-6">
        <h3 class="text-h4">Sign Up Today</h3>
        <p class="q-py-md text-overline">
          Stay updated with the latest collections, exclusive promotions, and special offers. Sign
          up today to receive all the exciting news from Jasmine Lee jewelry!
        </p>
      </div>
      <div class="col-12 col-md-6">
        <q-form @submit="onSubmit" class="q-col-gutter-md q-pr-md q-pr-md-none">
          <div class="row q-col-gutter-md">
            <q-input
              class="col"
              bg-color="white"
              outlined
              dense
              v-model="name"
              label="Name"
              lazy-rules
              hide-bottom-space
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />

            <q-input
              class="col"
              bg-color="white"
              outlined
              dense
              type="email"
              v-model="email"
              label="Email"
              lazy-rules
              hide-bottom-space
              :rules="[(val) => (val !== null && val !== '') || 'Please type your email']"
            />
          </div>

          <div>
            <q-btn unelevated class="full-width" label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const $q = useQuasar()

const name = ref(null)
const email = ref(null)
const accept = ref(false)

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      messemail: 'You need to accept the license and terms first',
    })
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      messemail: 'Submitted',
    })
  }
}
</script>
