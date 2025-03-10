<template>
  <q-page>
    <Banner title="About" :breadcrumbs="['Home', 'About']" />
    <section class="q-px-xl row q-col-gutter-lg">
      <div class="col column justify-center">
        <h3>Meet the Designer</h3>
        <p class="q-py-lg">
          Jasmine Lee is a passionate jewellery designer based in Vancouver, British Columbia. With
          a deep appreciation for artistry and craftsmanship, Jasmine creates timeless pieces that
          blend contemporary style with traditional techniques. Every design is crafted with
          precision, ensuring each piece tells a unique story, reflecting the individual style and
          personality of the wearer. Discover the creative vision behind Jasmine Lee Jewellery and
          experience the artistry that makes each piece truly special.
        </p>
      </div>
      <img class="col" src="image-placeholder.png" />
    </section>
    <section class="q-px-xl q-my-xl">
      <h3 class="text-center">Frequently Asked Questions</h3>
      <q-list>
        <q-expansion-item
          class="q-mt-md"
          v-for="(qa, idx) in QUESTIONS"
          :key="`q-${idx}`"
          expand-separator
          :label="qa.question"
          header-class="bg-grey-5"
        >
          <q-card>
            <q-card-section>
              {{ qa.answer }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import Banner from 'src/components/Banner.vue'

const QUESTIONS = [
  {
    question: 'What materials are used in Jasmine Lee Jewellery?',
    answer:
      'Jasmine Lee uses high-quality metals such as sterling silver, 14k gold, and platinum. The designs feature natural gemstones, pearls, and diamonds, ensuring each piece is not only beautiful but durable.',
  },
  {
    question: 'Can I order custom jewellery?',
    answer:
      "Yes, we specialize in creating custom jewellery tailored to your unique vision. Whether it's a special engagement ring, a personalized necklace, or any other piece, we work closely with you to bring your ideas to life. You can start the process by booking a consultation.",
  },
  {
    question: 'How do I care for my jewellery?',
    answer:
      "To keep your jewellery in the best condition, we recommend storing it in a safe, dry place when not in use. Avoid exposure to harsh chemicals, perfumes, or lotions, and clean your jewellery regularly with a soft cloth. For pieces with gemstones, it's a good idea to get them professionally cleaned occasionally to maintain their shine.",
  },
  {
    question: 'Do you offer jewellery repairs?',
    answer:
      "Yes, we offer jewellery repair services. Whether it's resizing a ring, fixing a clasp, or restoring a piece to its original condition, our team can help. Please contact us with details about the repair needed, and we’ll guide you through the process.",
  },
  {
    question: 'How long does it take to receive my order?',
    answer:
      "Delivery times vary depending on the type of jewellery and whether it's a custom piece. For ready-made jewellery, orders typically ship within 3-5 business days. Custom pieces may take longer, depending on the complexity of the design. We'll provide an estimated delivery time when your order is confirmed.",
  },
]
</script>
