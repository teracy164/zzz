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
      script: [
        {
          src: 'https://adm.shinobi.jp/s/518c8ffee39c2c2a3a4c44d04fbeb9f6', // 忍者ADMAXのスクリプトURL
          type: 'text/javascript',
          async: true,
        },
      ],
    },
  },
  site: {
    url: 'https://zzz.teracy.link/',
    name: 'ZZZ Tools',
    trailingSlash: true,
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },
});
