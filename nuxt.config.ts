// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: './src',
  css: ['@/assets/css/styles.scss'],
  modules: ['@element-plus/nuxt', '@nuxtjs/sitemap', '@nuxtjs/tailwindcss', '@nuxt/image'],
  elementPlus: {
    /** Options */
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  site: {
    url: 'https://zzz.teracy.link',
    name: 'ZZZ Tools',
    // trailingSlash: true,
  },
  experimental: {
    defaults: {
      // nuxtLink: {
      //   trailingSlash: 'append',
      // },
    },
  },
  router: {
    options: {
      strict: true,
    },
  },
});
