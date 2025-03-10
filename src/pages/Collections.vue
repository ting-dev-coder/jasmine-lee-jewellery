<template>
  <q-page>
    <Banner title="Collections" :breadcrumbs="['Home', 'Collections', 'Permanent Jewelry']" />
    <div class="q-mt-xl q-mb-md container q-mx-auto row justify-end">
      <q-select filled v-model="priceOrder" :options="options" dense />
    </div>
    <div class="container q-mx-auto row q-col-gutter-md">
      <div class="col-3" v-for="(collection, idx) in Collections" :key="`collection-${idx}`">
        <q-card>
          <img style="height: 200px" src="image-placeholder.png" />
          <div class="q-px-md q-py-sm">
            <h3>{{ collection.title }}</h3>
            <span class="block q-py-sm">${{ collection.price }}</span>
            <q-btn class="full-width" flat>SHOP NOW</q-btn>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import Banner from 'src/components/Banner.vue'
import { Collections } from 'src/data/collectionsCategories'
import { ref } from 'vue'

const options = ['Low to High', ' High to Low']
const priceOrder = ref('Low to High')
</script>
