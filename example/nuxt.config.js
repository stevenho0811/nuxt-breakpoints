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
