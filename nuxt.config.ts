// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: './src',
  css: ['@/assets/css/styles.scss'],
  app: {
    head: {
      title: 'ZZZ Tools',
      meta: [{ name: 'description', content: 'ゼンレスゾーンゼロのビルドカード作成ツールです' }],
    },
  },
  modules: ['@element-plus/nuxt'],
  elementPlus: {
    /** Options */
  },
});
