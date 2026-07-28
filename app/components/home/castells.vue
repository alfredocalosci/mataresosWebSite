<template>
    <!-- new two cols layout -->
    <div class="container max-w-240 mx-auto pb-6 pt-16 ">
        <section class="grid grid-cols-1 md:grid-cols-9 text-lg mx-6 md:mx-0">
            <article class=" md:col-start-2 col-span-7 lg:col-span-8 colums-1 md:columns-2 md:gap-x-12 lg:gap-x-24">
                <ContentRenderer v-if="castells?.[0]" :value="castells[0]" prose:false class="mdtxt"/>
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

    const { data: castells } = await useAsyncData(`castells-${locale.value}`, () => {
        const content = queryCollection(webCollection.value).where('section', '=', 'castells').order('order', 'ASC').all();
        return content;
    }, {watch: [webCollection]});

    // on Mounted
    onMounted(() => {
        // console.log('Web Collection:', webCollection.value);
        // console.log('Castells data:', castells.value);
    });


</script>

<style scoped >

   @reference "tailwindcss";
   @reference "~/assets/css/main.css";

   .mdtxt{
    @apply text-black
   }

    .mdtxt :deep(h3){
        @apply font-bold text-2xl pb-4 text-black;
    }

    .mdtxt :deep(p), p{
        @apply text-lg/6 font-light  ;
    }
</style>
