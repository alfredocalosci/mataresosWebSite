<script setup lang="ts">
  const { locale, t } = useI18n()

  const breadcrumbItems = useBreadcrumbs(() => [
    { label: t('breadcrumb.blog') }
  ])

   // descriptions for ca and it locales
  const descriptions = {
    ca: 'noticies i articles sobre castells i cultura algueresa',
    it: 'notizie e articoli su castells e cultura algherese'
  }

  useSeoMeta({
    title: 'Mataresos de l\'Alguer - Blog',
    ogTitle: 'Mataresos de l\'Alguer - Blog',
    description: descriptions[locale.value],
    ogDescription: descriptions[locale.value],
    ogImage: 'https://mataresos.cat/mataresos-og-image.png',
    twitterCard: 'summary_large_image',
  })
</script>

<template>
  <div class="w-full">

    <!-- i18n nav -->
    <div class="container mx-auto relative ">
      <language-global />
    </div>

    <!-- bradcrumbs -->
    <BreadcrumbsGlobal :breadcrumbItems="breadcrumbItems" />

    <!-- main content-->
    <div class="container mx-auto mt-6 max-w-240">
      <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0">
        <article class=" md:col-start-2 md:col-span-7 ">
          <h1 class="text-5xl/15 font-bold pb-3">Blog</h1>
        </article>
      </section>
    </div>

    <!-- below 
    <div class="container mx-auto mt-6 max-w-240">
      <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0">
        <article class=" md:col-start-2 md:col-span-8 bg-gray-200 min-h-64">
        </article>
      </section>
    </div>
    -->

    <!-- list of entries -->
    <div class="container mx-auto pb-6 mt-6 mb-12 max-w-240 min-h-[50vh]">
      <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0">
        <article class=" md:col-start-2 md:col-span-8 border-t border-gray-200 pt-6">
          <blog-list />
        </article>
      </section>
    </div>   
   
  </div>
</template>
