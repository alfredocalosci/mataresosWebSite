<template>

    <div class="container mx-auto  pb-6 pt-18 max-w-[960px]">
      <section class="grid grid-cols-9 text-lg">
        <article class="col-start-2 col-span-3 border-b border-neutral-300 ">
         <ContentRenderer v-if="castells[0]" :value="castells[0]" prose:false class="mdtxt"/>
        </article>

         <article class="col-start-6 col-span-3 ">
         <ContentRenderer v-if="castells[1]" :value="castells[1]" prose:false class="mdtxt"/>
        </article>
      </section>
  </div>

   <div class="container mx-auto  pb-12 max-w-[960px] ">
      <section class="grid grid-cols-9 text-lg">
        <article class="col-span-3 col-start-2 " >
          <p>Forman parte de la Colla personas de distintas edades, sexo y orígenes aplicando los valores del mundo casteller: Força, Equilibri, Valor i Seny </p>
        </article>  
        </section>
    </div>
</template>

<script setup>
    import { computed, onMounted } from 'vue';
    import { ContentRenderer } from '#components';
    // lng prop
    const { locale } = useI18n();
    // const route = useRoute();
    const webCollection = computed(() => `web_${locale.value}`);

    // retrieve md content
    /*
    const { data: castells } = await useAsyncData('castells', () => queryCollection(webCollection.value).where('section', '=', 'castells').order('order', 'ASC').all());
    */

    const { data: castells } = await useAsyncData('castells', () => {
        const content = queryCollection(webCollection.value).where('section', '=', 'castells').order('order', 'ASC').all();
        return content;
    }, {watch: [webCollection]});

    // on Mounted
    onMounted(() => {
        console.log('Web Collection:', webCollection.value);
        console.log('Castells data:', castells.value);
    });


</script>

<style scoped >

   @reference "tailwindcss";

    .mdtxt :deep(h3){
        @apply font-bold text-2xl pb-4;
    }

    .mdtxt :deep(p), p{
        @apply text-lg/6 font-light pb-4 ;
    }
</style>
