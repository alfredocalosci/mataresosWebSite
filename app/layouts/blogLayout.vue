<template>
    <div>
        <header class="border-b">
            <div class="container mx-auto pt-4 max-w-[960px]">
                <nav class="grid grid-cols-9">
                    <div class="flex justify-center">
                        <img src="~/assets/img/santMiquel_alt.png" alt="Sant Miquel" class="h-12 w-auto"/>
                    </div>

                    <div class="col-span-2 flex items-end">
                        <p class="uppercase  font-bold">mataresos <span class="font-light">de l</span><span class="text-coral-500">' </span>alguer</p>
                    </div>

                    <div class="col-start-8 flex items-end">
                        <p>the BLOG</p>
                    </div>
                </nav>
            </div>
        </header>
    <slot />
    <footer-global></footer-global>
    </div>
</template>
