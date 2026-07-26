<script setup lang="ts">
  import type { Collections } from '@nuxt/content'

  const route = useRoute()
  const { locale, t } = useI18n()
  const localePath = useLocalePath()

  const blogCollection = computed(() => `blog_${locale.value}` as keyof Collections)
  // @nuxt/content stores paths under the collection's locale prefix (e.g. "/ca/helloworld"),

  // not the "/blog" page route, so rebuild it from the slug param instead of route.path.
  const contentPath = computed(() => `/${locale.value}/${[route.params.slug].flat().join('/')}`)

  const { data: post } = await useAsyncData(
    route.path,
    () => queryCollection(blogCollection.value).path(contentPath.value).first(),
    { watch: [blogCollection] }
  )

  const breadcrumbItems = useBreadcrumbs(() => [
    { label: t('breadcrumb.blog'), to: localePath('blog') },
    { label: post.value?.title ?? '' }
  ])

  // descriptions for ca and it locales
  const descriptions = {
    ca: post.value?.title + ' - ' + post.value?.description,
    it: post.value?.title + ' - ' + post.value?.description,
  }

  useSeoMeta({
    title: 'Mataresos de l\'Alguer' + ' - ' + post.value?.title,
    ogTitle: 'Mataresos de l\'Alguer' + ' - ' + post.value?.title,
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

    <!-- main content-->
    <div class="container mx-auto mt-24 max-w-240">
      <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0">
          <article class=" md:col-start-2 md:col-span-7 ">
            <h1 class="text-5xl font-bold pb-3" v-if="post">{{ post.title }}</h1>

            <p
              v-if="post"
              class="text-2xl text-gray-600"
            >{{ post.description }}</p>

            <div class="mt-12 md_txt" v-if="post">
              <ContentRenderer :value="post" />
            </div>
          </article>
          </section>
      </div>

      <!-- bradcrumbs -->
      <BreadcrumbsGlobal :breadcrumbItems="breadcrumbItems" />

      <!-- list of entries -->
      <div class="container mx-auto pb-6 mt-6 mb-12 max-w-240 ">
        <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0">
          <article class=" md:col-start-2 md:col-span-8 border-t border-gray-200 pt-6">
            <blog-list />
          </article>
        </section>
      </div>   

  </div>
</template>

<style scoped>
 @reference "tailwindcss";
  @reference "~/assets/css/main.css";

  :deep(.md_txt p) {
    @apply text-xl/6;
  }

  :deep(h5) {
    @apply font-semibold;
  }

  :deep(.img_gallery) {
    @apply mt-18 mb-6;
  }

</style>