const { resolve } = require('path')

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
      router: {
        base: '/nuxt-breakpoints/'
      }
    }
    : {}

module.exports = {

  head: {
    title: 'Nuxt-Breakpoints',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Resize observer breakpoints with Nuxt.js module.' }
    ]
  },
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  ...routerBase,
  modules: [{ handler: require('../') }],
  breakpoints: {
    options: {
      polyfill: true,
      throttle: 10
    }
  }
}
