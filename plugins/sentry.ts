import * as pkg from '~/package.json'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

export default defineNuxtPlugin((nuxtApp) => {
  // console.log('nuxtApp: ', nuxtApp)
  const release = `${pkg.name}@${pkg.version}`
  const environment = process.env.NODE_ENV
  console.log('environment: ', environment)
  const app = nuxtApp.vueApp

  Sentry.init({
    app,
    dsn: '',
    release,
    environment,
    integrations: [
      new Integrations.BrowserTracing({
        tracePropagationTargets: ['localhost', '', /^\//]
      })
    ],
    sampleRate: 1,
    tracesSampleRate: 1
  })
})
