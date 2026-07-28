<script setup lang="ts">
interface Props {
  images?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  images: () => [ 'sanMiquel2025.jpg', 'pd4.jpg', 'piNa.jpg', 'sulis.jpg','canalla.jpg']
})

const basePath = '/img/gallery/'
const src = (file: string) => `${basePath}${file}`

const open = ref(false)
const activeIndex = ref(0)
const carouselKey = ref(0)

const openAt = (index: number) => {
  activeIndex.value = index
  carouselKey.value++
  open.value = true
}

const onSelect = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <div>
    <div class="columns-2 md:columns-3 gap-4 img_gallery">
      <button
        v-for="(file, index) in props.images"
        :key="file"
        type="button"
        class="block w-full mb-4 break-inside-avoid cursor-zoom-in"
        @click="openAt(index)"
      >
        <NuxtImg
          :src="src(file)"
          :alt="file"
          loading="lazy"
          class="w-full h-auto shadow-md/50"
        />
      </button>
    </div>

    <UModal
      v-model:open="open"
      :close="{ color: 'neutral', variant: 'ghost', class: 'text-white hover:bg-white/10' }"
      :ui="{
        content: 'max-w-[95vw] w-[95vw] h-[92vh] bg-transparent shadow-none ring-0',
        overlay: 'bg-black/75'
      }"
    >
      <template #content="{ close }">
        <div class="relative w-full h-full flex items-center justify-center">
          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            class="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
            aria-label="Close"
            @click="close"
          />

          <UCarousel
            v-if="open"
            :key="carouselKey"
            :items="props.images"
            :start-index="activeIndex"
            arrows
            wheel-gestures
            class="w-full h-full"
            :ui="{
              root: 'h-full',
              viewport: 'h-full',
              container: 'h-full',
              item: 'h-full flex items-center justify-center basis-full',
              prev: 'start-4 sm:start-4 top-1/2 -translate-y-1/2',
              next: 'end-4 sm:end-4 top-1/2 -translate-y-1/2'
            }"
            @select="onSelect"
          >
            <template #default="{ item }">
              <NuxtImg
                :src="src(item)"
                :alt="item"
                densities="1x"
                class="max-h-[90vh] max-w-full w-auto h-auto object-contain"
              />
            </template>
          </UCarousel>
        </div>
      </template>
    </UModal>
  </div>
</template>

<style scoped>
  
</style>