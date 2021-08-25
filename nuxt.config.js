import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Site Name',
    title: 'Site Name',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Site description' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: "#fdbd7f",
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/dayjs',

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

  sitemap: {
    hostname: 'http://domain.com',
  },

  dayjs: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    defaultTimeZone: 'America/Caracas',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },

  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#ffffff",
          secondary: "#fdbd7f",
          accent: "#012947",
          info: "#1B4A7B",
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
buildModules: [
    'nuxt-purgecss',
  ],

  purgeCSS: {
    extractors: () => [
        {
          extractor(content) {
            return content.match(/[A-z0-9-:\\/]+/g)
          },
          extensions: ['html', 'vue', 'js']
        },
        {
          extractor(content) {
            return content.match(/[A-z0-9-\\/]+/g)
          },
          extensions: ['vue'] // This will not work, because the above extractor is applied to 'vue' already.
        }
      ]
    }
  },

}
