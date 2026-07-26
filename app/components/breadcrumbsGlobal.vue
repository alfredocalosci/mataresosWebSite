<template>
  <div class="container mx-auto max-w-240">
    <section class="grid grid-cols-1 md:grid-cols-9 mx-6 md:mx-0">
      <article class=" md:col-start-2 md:col-span-8  ">
          <UBreadcrumb :items="breadcrumbItems" color="primary" />
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import type { BreadcrumbItem } from '@nuxt/ui'

  defineProps<{
    breadcrumbItems: BreadcrumbItem[]
  }>()

</script>

<style>

</style>