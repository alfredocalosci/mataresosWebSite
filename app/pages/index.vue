<template>
  <div class="bg-white border-b border-neutral-300 relative">

      <svg class="absolute inset-0 w-full h-full ">
        <circle cx="50%" cy="50%" r="40%" fill="#f1f5f5" />
      </svg>

        <!-- i18n nav -->
        <div class="container mx-auto relative ">
          <language-global />

           <section class="grid grid-cols-1 md:grid-cols-9 mx-6 md:mx-0">

            <article class="md:col-start-2 md:col-span-3 pt-12">
              <h1 class="text-5xl/9 lg:text-7xl/16 font-bold"> {{ $t("home.claim") }}</h1>
              <p class="text-xl pt-3">{{ $t("home.claim_2") }} <span class="text-coral-500 font-bold lg:text-2xl pr-2">…</span> {{ $t("home.claim_3") }} </p>
            </article>

            <img src="/img/cuatre_germanor_alt_2.png" alt="germanor" class="md:col-start-6 md:col-span-3 max-w-10/12 h-auto">
          </section>

        </div>

  </div>

    <!-- castells -->
    <home-castells />

    <!-- gallery -->
    <div class="container mx-auto mt-6 max-w-240 mb-12">
      <section class="grid grid-cols-1 md:grid-cols-9 mx-6 md:mx-0">
        <article class="md:col-start-2 md:col-span-7 lg:col-span-8">
          <ImageGallery />
        </article>
      </section>
    </div>

    <!-- assaig oberts -->
    <home-assaig />

    <!-- mataresos / unesco -->
    <home-identitat />

</template>

<script setup>
  // const { locales, setLocale } = useI18n()
  const { locale, t } = useI18n()
  // const localePath = useLocalePath()

  // descriptions for ca and it locales
  const descriptions = {
    ca: 'fem castells y parlem en alguerés',
    it: 'facciamo castelli e parliamo in algherese'
  }

  useSeoMeta({
    title: 'Mataresos de l\'Alguer - Colla Castellera',
    ogTitle: 'Mataresos de l\'Alguer - Colla Castellera',
    description: descriptions[locale.value],
    ogDescription: descriptions[locale.value],
    ogImage: 'https://mataresos.cat/mataresos-og-image.png',
    twitterCard: 'summary_large_image',
  })

  /*
  ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
    */

</script>