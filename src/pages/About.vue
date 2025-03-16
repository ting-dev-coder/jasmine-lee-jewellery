<template>
  <q-page>
    <Banner title="About" :breadcrumbs="['Home', 'About']" />
    <section class="q-px-xl row q-col-gutter-lg">
      <div class="col-12 col-md-6 column justify-center">
        <h3 class="text-h3">Meet the Designer</h3>
        <p class="q-py-lg text-content">
          Jasmine Lee is a passionate jewelry designer based in Vancouver, British Columbia. With a
          deep appreciation for artistry and craftsmanship, Jasmine creates timeless pieces that
          blend contemporary style with traditional techniques. Every design is crafted with
          precision, ensuring each piece tells a unique story, reflecting the individual style and
          personality of the wearer. Discover the creative vision behind Jasmine Lee jewelry and
          experience the artistry that makes each piece truly special.
        </p>
      </div>
      <img class="col-12 col-md-6" src="designer.jpg" />
    </section>
    <section class="q-py-xl q-px-xl q-my-xl">
      <h3 class="text-center text-h4 q-pb-xl">Frequently Asked Questions</h3>
      <q-list>
        <q-expansion-item
          class="q-mt-md"
          v-for="(qa, idx) in QUESTIONS"
          :key="`q-${idx}`"
          expand-separator
          bordered
          :label="`${idx + 1}. ${qa.question}`"
          header-class="bg-primary text-content"
        >
          <q-card>
            <q-card-section class="text-h6 text-weight-regular">
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
    question: 'What materials are used in Jasmine Lee jewelry?',
    answer:
      'Jasmine Lee uses high-quality metals such as sterling silver, 14k gold, and platinum. The designs feature natural gemstones, pearls, and diamonds, ensuring each piece is not only beautiful but durable.',
  },
  {
    question: 'Can I order custom jewelry?',
    answer:
      "Yes, we specialize in creating custom jewelry tailored to your unique vision. Whether it's a special engagement ring, a personalized necklace, or any other piece, we work closely with you to bring your ideas to life. You can start the process by booking a consultation.",
  },
  {
    question: 'How do I care for my jewelry?',
    answer:
      "To keep your jewelry in the best condition, we recommend storing it in a safe, dry place when not in use. Avoid exposure to harsh chemicals, perfumes, or lotions, and clean your jewelry regularly with a soft cloth. For pieces with gemstones, it's a good idea to get them professionally cleaned occasionally to maintain their shine.",
  },
  {
    question: 'Do you offer jewelry repairs?',
    answer:
      "Yes, we offer jewelry repair services. Whether it's resizing a ring, fixing a clasp, or restoring a piece to its original condition, our team can help. Please contact us with details about the repair needed, and we’ll guide you through the process.",
  },
  {
    question: 'How long does it take to receive my order?',
    answer:
      "Delivery times vary depending on the type of jewelry and whether it's a custom piece. For ready-made jewelry, orders typically ship within 3-5 business days. Custom pieces may take longer, depending on the complexity of the design. We'll provide an estimated delivery time when your order is confirmed.",
  },
]
</script>
