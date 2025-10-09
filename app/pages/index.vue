<template>
  <div class="bg-white border-b border-neutral-300 relative">

      <svg class="absolute inset-0 w-full h-full ">
        <circle cx="50%" cy="50%" r="40%" fill="#f1f5f5" />
      </svg>

        <!-- upper nav -->
        <div class="container mx-auto relative ">
          <section class="grid grid-cols-9 max-w-[960px] mx-auto">

            <p class="col-start-2 col-span-3 italic text-xs pt-1">{{ $t("home.colla") }}</p>
            <!-- senyera -->
            <div class="col-start-8 flex justify-center">
              <img src="~/assets/img/triangle.png" alt="senyera" class=" max-h-12 w-auto">
            </div>

            <!-- lng switch-->
            <div class="col-start-9 flex justify-center pt-4">

              <NuxtLink :to="switchLocalePath('ca')"
              :class="{ 'font-bold': locale === 'ca' }">CA</NuxtLink>
              <span 
                  class="mx-3 text-xl text-neutral-300"
                  >|</span>
              <NuxtLink :to="switchLocalePath('it')"
              :class="{ 'font-bold': locale === 'it' }">IT</NuxtLink>

            </div>

          </section>

           <section class="grid grid-cols-9 ">

            <article class="col-start-2 col-span-3 pt-12">
              <h1 class="text-7xl/16 font-bold"> {{ $t("home.claim") }}</h1>
              <p class="text-xl pt-2">{{ $t("home.claim_2") }} <span class="text-coral-500 font-bold text-2xl pr-2">…</span> {{ $t("home.claim_3") }} </p>
            
            </article>

            <img src="/img/germanor.png" alt="germanor" class="col-start-6 col-span-3 max-w-10/12 h-auto">
          </section>
        </div>

  </div>

  <!-- castells -->
  <home-castells />

  <!-- assaig oberts -->
  <section class="border-b  pt-12">
     <div class="container mx-auto    ">
      <section class="grid grid-cols-9 text-lg">

        <article class="col-start-2 col-span-2 py-6">
            <h2 class="font-bold text-4xl pt-4 pb-2">Assaig oberts <span class="text-coral-500">...</span></h2>
            <p class="text-xl/6">Els assaigs oberts són una oportunitat perquè tothom pugui conèixer de primera mà la nostra activitat i, qui sap, potser fins i tot animar-se a participar-hi!</p>
        </article>

        <article class="col-start-4 col-span-3 pt-6 h-full pr-6 ">
          <div class="flex h-full items-end">
            <img src="/img/pom_complete_2.png" alt="pom">
          </div>
           
        </article>

        <article class="col-start-7 col-span-2 pt-6 text-right">
            <h2 class="font-bold text-3xl pt-4 pb-2">&nbsp;</h2>
            <p  class="text-base/5" >Els assaigs oberts són una oportunitat perquè tothom pugui conèixer de primera mà la nostra activitat i, qui sap, potser fins i tot animar-se a participar-hi!</p>
        </article>
      </section>
    </div>

  </section>
   
  <section class="bg-amber-400">
    <div class="container mx-auto  py-18 ">
      <section class="grid grid-cols-9 text-lg">
        <div class="flex justify-center">
          <img src="~/assets/img/antxaneta.png" alt="escut">
        </div>

        <article class="col-span-3  pt-6" >
          <h6 class="uppercase font-bold">mataresos</h6>
          <p class="text-base/5">lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>

        <img src="~/assets/img/UNESCO-ICH-blue.png" alt="UNESCO" class="col-start-6 max-w-24 h-auto grayscaleee">

        <article class="col-span-2 col-start-7">
          <p class="text-base/5 pt-6">La <strong>UNESCO</strong> declaró los castells como Patrimonio Inmaterial de la Humanidad el 16 de Noviembre de 2010..</p>
        </article>


      </section>
    </div>
  </section>
  
</template>

<script setup>
  const { locales, setLocale } = useI18n()
  const { locale, t } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  // const localePath = useLocalePath()

  watch(locale, (newLocale, oldLocale) => {
  // Handle locale change
    console.log('Locale changed from', oldLocale, 'to', newLocale)
  })

  onMounted(() => {
    
  })
</script>