import type { BreadcrumbItem } from '@nuxt/ui'

// Home root + locale-aware `to` resolution live here so pages only need to
// supply their own trailing segment(s); the trail is a getter so it can read
// reactive/async page state (e.g. a post title once it has loaded).
export function useBreadcrumbs(trail: () => BreadcrumbItem[]) {
  const { t } = useI18n()
  const localePath = useLocalePath()

  return computed<BreadcrumbItem[]>(() => [
    { label: t('breadcrumb.home'), to: localePath('index') },
    ...trail()
  ])
}
