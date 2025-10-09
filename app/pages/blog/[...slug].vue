<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog_ca').path(route.path).first()
})

definePageMeta({
     layout: 'blog-layout'
  })
</script>

<template>
  <div class="bg-white border-b border-neutral-300 py-12">
    <div class="container mx-auto relative ">
      <section class="grid grid-cols-9 max-w-[960px] mx-auto">
        <article class="col-start-2 col-span-7 text-lg">
          <h1 class="text-4xl font-bold pb-6" v-if="page">{{ page.title }}</h1>
          <ContentRenderer v-if="page" :value="page" />
        </article>
      </section>
    </div>
  </div>
</template>
