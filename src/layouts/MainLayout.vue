<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="height: 100px" class="q-py-md bg-grey">
      <q-toolbar class="container flex justify-between align-items full-height">
        <h1 class="full-height"><img style="height: 100%" src="logo.png" /></h1>
        <q-btn class="lt-md" flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <ul class="gt-sm self-center text-dark">
          <q-btn
            class="q-ml-sm"
            dense
            flat
            no-caps
            v-for="(item, idx) in menu"
            :key="`menu-${idx}`"
            :to="item.path"
            >{{ item.label }}</q-btn
          >
        </ul>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerLeft"
      :width="200"
      :breakpoint="1200"
      elevated
      class="bg-primary text-black"
    >
      <q-scroll-area class="fit">
        <ul class="self-center text-dark">
          <q-btn
            class="block"
            align="left"
            flat
            v-for="(item, idx) in menu"
            :key="`menu-${idx}`"
            :to="item.path"
            >{{ item.label }}</q-btn
          >
        </ul>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script setup>
import TheFooter from '@components/TheFooter'
import { ref } from 'vue'

const drawerLeft = ref(false)
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
