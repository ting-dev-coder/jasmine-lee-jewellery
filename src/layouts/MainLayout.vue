<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="height: 100px" class="flex justify-between align-items">
      <q-img width="220px" height="100%" src="logo.png" />
      <ul class="self-center">
        <q-btn
          class="q-ml-sm"
          dense
          flat
          v-for="(item, idx) in menu"
          :key="`menu-${idx}`"
          :to="item.path"
          >{{ item.label }}</q-btn
        >
      </ul>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script setup>
import TheFooter from '@components/TheFooter'

const menu = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Collections',
    path: '/collections',
  },
  {
    label: 'Custom Work',
    path: '/custom-work',
  },
  {
    label: 'Book a Consultation',
    path: '/book-consultation',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]
</script>
