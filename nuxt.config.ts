// https://nuxt.com/docs/api/configuration/nuxt-config

// import obfuscator from 'rollup-plugin-obfuscator'
import visualizer from 'rollup-plugin-visualizer'
// import path from 'node:path'
const lifecycle = process.env.npm_lifecycle_event

console.log('process.argv ', process.argv)
console.log('process.env.NODE_ENV ', process.env.NODE_ENV)

export default defineNuxtConfig({
  ssr: true,

  sourcemap: {
    client: process.env.NODE_ENV === 'development'
  },

  build: {
    transpile: lifecycle === 'build' ? [] : []
  },

  alias: {
    img: '/public/img'
  },

  app: {
    baseURL: '',
    head: {
      title: 'nuxt3app',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      script: [
        // { src: 'https://awesome-lib.js' }
      ],
      link: [{ rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
      style: []
    }
  },

  components: [
    {
      path: '@/components'
    }
  ],

  vite: {
    server: {
      hmr: true,
      proxy: {}
    },
    plugins: [
    ],
    build: {
      rollupOptions: {
        plugins: [
          visualizer(),
          // obfuscator({
          //   global: true,
          //   options: {
          //     compact: true,
          //     controlFlowFlattening: false,
          //     controlFlowFlatteningThreshold: 0.75,
          //     deadCodeInjection: false,
          //     deadCodeInjectionThreshold: 0.4,
          //     debugProtection: false,
          //     debugProtectionInterval: 0,
          //     disableConsoleOutput: false,
          //     domainLock: [],
          //     domainLockRedirectUrl: 'about:blank',
          //     forceTransformStrings: [],
          //     identifierNamesCache: null,
          //     identifierNamesGenerator: 'hexadecimal',
          //     identifiersDictionary: [],
          //     identifiersPrefix: '',
          //     ignoreImports: false,
          //     inputFileName: '',
          //     log: false,
          //     numbersToExpressions: false,
          //     optionsPreset: 'default',
          //     renameGlobals: false,
          //     renameProperties: false,
          //     renamePropertiesMode: 'safe',
          //     reservedNames: [],
          //     reservedStrings: [],
          //     seed: 0,
          //     selfDefending: false,
          //     simplify: true,
          //     sourceMap: false,
          //     sourceMapBaseUrl: '',
          //     sourceMapFileName: '',
          //     sourceMapMode: 'separate',
          //     sourceMapSourcesMode: 'sources-content',
          //     splitStrings: false,
          //     splitStringsChunkLength: 10,
          //     stringArray: true,
          //     stringArrayCallsTransform: true,
          //     stringArrayCallsTransformThreshold: 0.5,
          //     stringArrayEncoding: [],
          //     stringArrayIndexesType: ['hexadecimal-number'],
          //     stringArrayIndexShift: true,
          //     stringArrayRotate: true,
          //     stringArrayShuffle: true,
          //     stringArrayWrappersCount: 1,
          //     stringArrayWrappersChainedCalls: true,
          //     stringArrayWrappersParametersMaxCount: 2,
          //     stringArrayWrappersType: 'variable',
          //     stringArrayThreshold: 0.75,
          //     target: 'browser'
          //   }
          // })
        ]
      }
    },
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
      pure: process.env.NODE_ENV === 'production' ? ['console.log', 'console.info'] : []
    }
  },

  nitro: {
    // options
  },

  css: ['@/assets/scss/base.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/sentry.ts'],

  runtimeConfig: {
    ENV: process.env.ENV
  },

  compatibilityDate: '2024-08-23'
})