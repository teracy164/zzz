import type { ZzzPlugin } from '~/plugins/zzz.plugin'

declare module '#app' {
  interface NuxtApp {
    $zzz: ZzzPlugin
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $zzz: ZzzPlugin
  }
}

export {}
