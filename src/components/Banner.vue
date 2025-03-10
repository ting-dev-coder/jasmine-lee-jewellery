<template>
  <section class="bg-grey-4 q-py-md q-mb-xl">
    <div class="container">
      <q-breadcrumbs style="font-size: 16px">
        <q-breadcrumbs-el
          v-for="(breadcrumb, idx) in breadcrumbs"
          :key="`breadcrumb-${idx}`"
          :label="breadcrumb"
        />
      </q-breadcrumbs>
      <h2 class="text-center q-py-xl">{{ title }}</h2>
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
