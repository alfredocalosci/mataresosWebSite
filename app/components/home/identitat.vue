<template>
    <section class="bg-amber-400">
      <div class="container mx-auto py-18">
        <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0 gap-y-6 md:gap-y-12 lg:gap-y-0">

          <img
            class="md:col-start-2"
            src="~/assets/img/antxaneta.png"
            alt="escut"
          >

          <article class="md:col-span-6 lg:col-span-2">
            <ContentRenderer v-if="home[0]" :value="home[0]" prose:false class="mdtxt" />
          </article>

          <img
            src="~/assets/img/UNESCO-ICH-blue.png" alt="UNESCO"
            class="md:col-start-2 lg:col-start-6 w-1/3 md:w-2/3 lg:w-1/2  h-auto"
          >

          <article class="md:col-span-6 lg:col-span-2 lg:col-start-7">
            <ContentRenderer v-if="home[1]" :value="home[1]" prose:false class="mdtxt" />
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

    const { data: home } = await useAsyncData('home', () => {
        return queryCollection(webCollection.value).where('section', '=', 'home').order('order', 'ASC').all();
    }, { watch: [webCollection] });
</script>

<style scoped>

    @reference "tailwindcss";
    @reference "~/assets/css/main.css";

    .mdtxt {
      @apply text-black
    }

    .mdtxt :deep(h6) {
      @apply uppercase font-bold leading-5 mb-2;
    }

    .mdtxt :deep(p) {
      @apply text-base/5 mb-2.5;
    }
</style>
