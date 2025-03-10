<template>
  <section class="bg-grey-4 q-py-md">
    <div class="container">
      <q-breadcrumbs style="font-size: 16px">
        <q-breadcrumbs-el
          v-for="(breadcrumb, idx) in breadcrumbs"
          :key="`breadcrumb-${idx}`"
          :label="breadcrumb"
        />
      </q-breadcrumbs>
      <h2 v-if="title" class="text-center q-mb-xl q-py-xl">{{ title }}</h2>
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
