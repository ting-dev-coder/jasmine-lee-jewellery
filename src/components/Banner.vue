<template>
  <section class="bg-yellow-3 q-pt-md">
    <div class="container">
      <q-breadcrumbs style="font-size: 16px">
        <q-breadcrumbs-el
          class="text-black"
          v-for="(breadcrumb, idx) in breadcrumbs"
          :key="`breadcrumb-${idx}`"
          :label="breadcrumb"
        />
      </q-breadcrumbs>
      <h2 v-if="title" class="text-h2 text-center q-mb-xl q-py-xl">{{ title }}</h2>
    </div>
  </section>
</template>
<script setup>
defineProps({
  title: {
    type: String,
  },
  breadcrumbs: {
    type: Array,
  },
})
</script>
