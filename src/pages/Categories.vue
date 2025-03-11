<template>
  <q-page class="q-mb-xl">
    <Banner title="Permanent Jewelry" :breadcrumbs="['Home', 'Collections', 'Permanent Jewelry']" />
    <div class="q-mt-xl q-mb-md container q-mx-auto row justify-end">
      <q-select filled v-model="priceOrder" :options="options" dense />
    </div>
    <div class="container q-mx-auto row q-col-gutter-md">
      <div class="col-3" v-for="(category, idx) in Category?.categories" :key="`category-${idx}`">
        <BaseCard
          :title="category.title"
          :price="category.price"
          :img-path="category.imagePath"
          @click="onProductClick(category)"
        />
      </div>
    </div>
  </q-page>
</template>
<script setup>
import Banner from 'src/components/Banner.vue'
import BaseCard from 'src/components/BaseCard.vue'
import { Categories } from 'src/data/collectionsCategories'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const options = ['Low to High', ' High to Low']
const priceOrder = ref('Low to High')
const route = useRoute()
const router = useRouter()
const collectionId = route.params.id

const Category = Categories.find((category) => category.collectionId === Number(collectionId))

function onProductClick(collection) {
  router.push({
    name: 'Product',
    params: { id: collectionId, categoryId: Category.id, productId: collection.id },
  })
}
</script>
