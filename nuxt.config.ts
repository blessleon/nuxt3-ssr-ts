// https://nuxt.com/docs/api/configuration/nuxt-config

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  alias: {
    img: '/public/img'
  },
  app: {
    baseURL: '/',
    head: {
      title: 'nuxt3app',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      script: [
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      style: []
    }
  },
  components: [
    {
      path: '@/components',
    }
  ],
  vite: {
    server: {
      hmr: true,
      proxy: {}
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    build: {
      rollupOptions: {
        plugins: [visualizer()]
      }
    },
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger']: [],
      pure: process.env.NODE_ENV === 'production' ? ['console.log', 'console.info']: [],
    }
  },
  nitro: {
    // options
  },
  css: ['@/assets/scss/element-plus.scss', '@/assets/scss/base.scss'],

  modules: ['@element-plus/nuxt'],
  plugins: [
    '@/plugins/sentry.ts',
    '@/plugins/element-plus.ts'
  ],
  runtimeConfig: {
    ENV: process.env.ENV
  }
})
