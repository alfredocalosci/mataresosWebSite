<template>
    <section class="border-b pt-12">
      <div class="container mx-auto">
        <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0 mb-6 md:mb-0">

          <!-- assaig oberts -->
          <article class="col-start-1 col-span-1 md:col-start-2 md:col-span-2 py-6">
              <ContentRenderer v-if="assaig[0]" :value="assaig[0]" prose:false class="mdtxt" />
          </article>

         
          <article class="hidden md:grid md:col-start-4 md:col-span-3 pt-6 h-full pr-6 ">
            <div class="flex h-full items-end">
              <img src="/img/pom_complete_2.png" alt="pom">
            </div>
          </article>

           <!-- assaig lloc -->
          <article class="md:col-start-7 md:col-span-2 md:pt-6 md:text-right">
              <ContentRenderer v-if="assaig[1]" :value="assaig[1]" prose:false class="mdtxt" />
          </article>
        </section>
      </div>
    </section>
</template>

<script setup>
    import { computed } from 'vue';
    import { ContentRenderer } from '#components';

    const { locale } = useI18n();
    const webCollection = computed(() => `web_${locale.value}`);

    const { data: assaig } = await useAsyncData('assaig', () => {
        return queryCollection(webCollection.value).where('section', '=', 'assaig').order('order', 'ASC').all();
    }, { watch: [webCollection] });
</script>

<style scoped>

    @reference "tailwindcss";
    @reference "~/assets/css/main.css";

    .mdtxt {
        @apply text-black
    }

    .mdtxt :deep(h2) {
        @apply font-bold text-2xl lg:text-4xl pt-4 pb-2 text-black;
    }

    .mdtxt :deep(h3) {
        @apply font-bold  text-2xl lg:text-4xl lg:pt-4 pb-2 text-black;
    }

    .mdtxt :deep(h3)::after {
        content: " ...";
        @apply text-coral-500 font-bold pr-2;
    }

    .mdtxt :deep(p) {
        @apply text-xl/6 font-light;
    }

    .mdtxt :deep(h6) {
        @apply text-base/5 font-light;
    }
</style>
