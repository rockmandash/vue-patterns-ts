import path from 'path';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Press+Start+2P'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/nes.css@2.3.0/css/nes.min.css'
      }
    ],
    script: [
      {
        src: '/blotter.min.js'
      },
      {
        src: '/channelSplitMaterial.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/highlightjsDirective.js',
    '~/plugins/clipboardDirective.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.resolve.alias['vue-patterns-ts'] = path.resolve(
        __dirname,
        './components/vue-patterns-ts'
      );
    }
  }
};
