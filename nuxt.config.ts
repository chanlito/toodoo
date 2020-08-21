import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  head: {
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }],
  },
  css: ['@/assets/styles/main.scss'],
  serverMiddleware: [{ path: '/api', handler: '@/api/index.ts' }],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api'],
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
};

export default config;
