const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.breakpoints,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-breakpoints.js',
    options
  })
}

module.exports.meta = require('../package.json')
