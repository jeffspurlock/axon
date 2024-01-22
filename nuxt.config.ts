export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-svgo', 
    '@pinia/nuxt',
    '@nuxt/content'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  content: {
    markdown: {
      anchorLinks: false
    }
  },
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  },
  svgo: {
    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // customize default plugin options
              inlineStyles: {
                onlyMatchedOnce: false
              },
            }
          }
        }
      ]
    }
  }
})
