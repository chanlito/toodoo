import { NuxtConfig } from '@nuxt/types';
import VuetifyLoader from 'vuetify-loader/lib/plugin';

import { sassLoaderOptions, scssLoaderOptions } from './util/sass-loader';

const config: NuxtConfig = {
  head: {
    title: 'TooDoo',
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },
    ],
    link: [
      {
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@400;600&display=swap',
        rel: 'stylesheet',
      },
      { href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css', rel: 'stylesheet' },
    ],
  },
  css: ['@/assets/styles/main.scss'],
  loading: false,
  build: {
    /**
     * Customize Webpack loaders
     */
    loaders: {
      sass: sassLoaderOptions,
      scss: scssLoaderOptions,
    },
    /**
     * Define & customize Webpack plugins
     */
    plugins: [
      new VuetifyLoader({
        match(originalTag: string, { kebabTag, camelTag }: any) {
          if (kebabTag.startsWith('app-')) {
            return [camelTag, `import ${camelTag} from '@/components/${kebabTag}.vue'`];
          }
        },
      }),
    ],
    /**
     * Define additional dependencies to be transpiled when build
     */
    transpile: ['vuetify'],
  },
  serverMiddleware: [{ path: '/api', handler: '@/api/index.ts' }],
  buildModules: [
    // Below modules are only required during development and build time.
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
  ],
  plugins: [
    // Define local plugins below
    '@/plugins/vuetify',
  ],
  modules: [
    // Define Nuxt.js modules below
    '@nuxtjs/axios',
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
};

export default config;
