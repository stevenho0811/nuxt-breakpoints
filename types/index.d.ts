import Vue from 'vue'

interface NuxtBreakpoints {
    current: string

    xs: boolean

    sm: boolean
    lSm:boolean
    sSm: boolean

    md: boolean
    lMd: boolean
    sMd: boolean

    lg:boolean
    lLg: boolean
    sLg: boolean

    xl: boolean

    width: number
    height: number

    orientation: string
}

declare module '@nuxt/vue-app' {
  interface Context {
    $breakpoints: NuxtBreakpoints
  }
  interface NuxtAppOptions {
    $breakpoints: NuxtBreakpoints
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $breakpoints: NuxtBreakpoints
  }
  interface NuxtAppOptions {
    $breakpoints: NuxtBreakpoints
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $breakpoints: NuxtBreakpoints
  }
}


declare module 'vuex/types/index' {
  interface Store<S> {
    $breakpoints: NuxtBreakpoints
  }
}