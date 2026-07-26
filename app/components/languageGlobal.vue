<template>
  <section class="grid grid-cols-3 md:grid-cols-9 max-w-240 mx-auto">

    <p class="col-start-auto col-span-1 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-3 italic text-sm leading-4 pt-2 md:pt-1 pl-3  md:pl-0">{{ $t("home.colla") }}</p>

    <!-- senyera -->
    <div class="col-start-auto md:col-start-6 lg:col-start-8 flex justify-center">
      <img src="~/assets/img/triangle.png" alt="senyera" class=" max-h-12 w-auto">
    </div>

    <!-- lng switch-->
    <div class="col-start-auto col-span-1 md:col-start-8 lg:col-start-9 flex justify-center pt-4">

      <NuxtLink :to="switchLocalePath('ca')"
      :class="{ 'font-bold': locale === 'ca' }">CA</NuxtLink>

      <span
          class="mx-3 text-xl text-neutral-300"
          >|</span>

      <NuxtLink :to="switchLocalePath('it')"
      :class="{ 'font-bold': locale === 'it' }">IT</NuxtLink>

    </div>

  </section>
</template>

<script setup>
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
</script>
