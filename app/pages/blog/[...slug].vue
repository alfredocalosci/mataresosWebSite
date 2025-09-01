<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <h1 class="text-4xl font-bold" v-if="page">{{ page.title }}</h1>
  <ContentRenderer v-if="page" :value="page" />
</template>
