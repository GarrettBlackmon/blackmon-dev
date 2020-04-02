import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'Garrett Blackmon' + ' | %s',
    title: 'Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hi, my name is Garrett and this is my personal website. I'm a software developer based in Birmingham, AL."
      },
      { name: 'image', content: 'https://blackmon.dev/icon.png' },

      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Garrett Blackmon - Full Stack Web Developer'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Hi, my name is Garrett and this is my personal website. I'm a software developer based in Birmingham, AL."
      },
      { name: 'og:image', content: 'https://blackmon.dev/icon.png' },
      { name: 'og:url', content: 'https://blackmon.dev/' },
      { name: 'og:type', content: 'website' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#41B883' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/vue-particles', ssr: false },
    { src: '@/plugins/aos', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/device'
  ],

  styleResources: {
    scss: ['@/assets/_breakpoints.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    options: {
      customProperties: true
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
