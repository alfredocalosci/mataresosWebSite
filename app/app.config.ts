export default defineAppConfig({
  ui: {
    prose: {
      p: {
        base: 'my-0 leading-6 text-pretty mb-6'
      },
      h3: {
        slots: {
          base: 'mt-0 mb-0'
        }
      }
    },
    breadcrumb: {
      slots: {
        link: ' text-base text-gray-700',
        separatorIcon: 'shrink-0 size-5 text-gray-300'
      },
      variants: {
        active: {
          true: {
            link: 'font-semibold text-coral-500'
          },
          false: {
            link: 'text-muted'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          active: true,
          class: {
            link: 'text-coral-500'
          }
        },
      ]
    }
  }
})
