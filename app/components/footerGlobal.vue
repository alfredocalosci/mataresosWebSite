<script setup>
    const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="bg-coral-500 p-4 text-white py-12">
        <div class="container mx-auto  ">
        <section class="grid grid-cols-1 md:grid-cols-9 text-center md:text-left">

            <div
                class="md:col-start-2 lg:col-start-3 md:col-span-2 pt-6 order-2 md:order-1"
            >
                <p class="text-sm">© {{ currentYear }} Mataresos de l'Alguer</p>
            </div>

            <img
                src="~/assets/img/mataresos_rombo_tr.png"
                alt="escut"
                class="md:col-start-5 order-1 md:order-2 justify-self-center"
            >
            
            <UiButton
                as="a"
                href="https://www.instagram.com/mataresosalguer/"
                target="_blank"
                rel="noopener noreferrer"
                class="md:col-start-7 md:col-span-2 flex justify-center md:justify-start pt-6 gap-3 bg-transparent border-none p-0 order-3"
            >
                <UIcon
                    name="mdi:instagram"
                    class="size-8 text-white hover:text-gray-300 transition-colors duration-300"
                />

                @mataresosalguer

            </UiButton>
        </section>
        </div>
    </footer>
</template>
