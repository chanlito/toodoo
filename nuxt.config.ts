// @ts-check
const { VuetifyLoaderPlugin } = require('vuetify-loader');
const { sassLoaderOptions, scssLoaderOptions } = require('./util/sass-loader');

const config: import('@nuxt/types').NuxtConfig = {
  head: {
    title: 'TooDoo',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },
      { property: 'og:image', content: 'https://toodoo.vercel.app/android-chrome-512x512.png' },
      { name: 'title', content: 'TooDoo&trade;' },
      { name: 'description', content: "Our mission is to help you do 'em all.", hid: 'description' },
    ],
    link: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
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
      new VuetifyLoaderPlugin({
        match(originalTag: string, { kebabTag, camelTag }: any) {
          if (kebabTag.startsWith('app-')) {
            return [camelTag, `import ${camelTag} from '@/components/${kebabTag}.vue'`];
          }
        },
        registerStylesSSR: true,
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
