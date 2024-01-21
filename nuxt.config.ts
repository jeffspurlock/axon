export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-svgo', 
    '@pinia/nuxt',
    '@nuxt/content'
  ],
  content: {
    markdown: {
      anchorLinks: false
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
