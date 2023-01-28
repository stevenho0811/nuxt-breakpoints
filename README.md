# IMPORTANT NOTE: THIS REPO IS DEPRECATED.
So why is this repo deprecated? As time goes by, browsers and front-end progress rapidly, this lib was initially created to make it easy for me to get the current breakpoints through js when using Nuxt 2 at work, to display specific components, it has served its purpose for a while but it was not continuously maintained.

Nowadays, Resize Observer is widely used and has good support, there are even better alternatives like MediaQueryList that have better ways of achieving the same goal.

Vue and Nuxt have also released version 3, if you are already using the composition-api, VueUse has also provided useBreakpoints which may be a good alternative option.

As things change, implementing a similar lib is not difficult, I recently tidied up my GitHub and thought this package is no longer necessary.
So I have decided to deprecate this project, I hope to write other good projects in the future and maintain them properly.

# nuxt-breakpoints

> Resize observer breakpoints with Nuxt.js module.

[![NPM](https://nodei.co/npm/nuxt-breakpoints.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nuxt-breakpoints/)
<a href="https://www.buymeacoffee.com/stevenho0811" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
[![Codecov](https://codecov.io/gh/stevenho0811/nuxt-breakpoints/branch/master/graph/badge.svg)](https://codecov.io/gh/stevenho0811/nuxt-breakpoints)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Package Size](https://img.shields.io/bundlephobia/minzip/nuxt-breakpoints)](https://nodei.co/npm/nuxt-breakpoints/)



[DEMO](https://stevenho0811.github.io/nuxt-breakpoints/)

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-breakpoints` dependency to your project

```bash
yarn add nuxt-breakpoints # or npm install nuxt-breakpoints
```

2. Add `nuxt-breakpoints` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-breakpoints',

    // With options
    ['nuxt-breakpoints', { /* module options */ }]
  ]

  // Another way to use options
  breakpoints: {
    // default options
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    options: {
      polyfill: true,
      throttle: 200
    }
  }
}
```
## Usage
```js
// components.vue
export default {
  computed: {
    isMdOrSm () { return this.$breakpoints.md || this.$breakpoints.sm },
    isLargeThanSm() {
      return this.$breakpoints.lSm // Is Large than sm include sm
    },
    isSmallThanMd() {
      return this.$breakpoints.sMd // Is Small than md include md
    }
    // ... etc lSm lMd lLg, and sSm sMd sLg
  }
}
```

## Options
| property | type                                        | default                           | note                                                                                                                                                                                                                          |
|----------|---------------------------------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| xs       | none                                        | none                              | <= 576px，Extra small, smallest.                                                                                                                                                                                              |
| sm       | number                                      | 576                               | >= 576px(sm) && <= 768px(md)                                                                                                                                                                                                  |
| md       | number                                      | 768                               | >= 768px(md) && <= 992px(lg)                                                                                                                                                                                                  |
| lg       | number                                      | 992                               | >= 992px(lg) && <= 1200px(xl)                                                                                                                                                                                                 |
| xl       | number                                      | 1200                              | >= 1200px, Extra large, largest.                                                                                                                                                                                              |
| options  | object<polyfill: boolean, throttle: number> | { polyfill: true, throttle: 200 } | `polyfill` default by true, which means will auto-import `resize-observer-polyfill` when the browser doesn't support ResizeObserver more information below, `throttle` will slow down when Window has resizing trigger speed. |

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`


## Ref
[Nuxt.js](https://nuxtjs.org)

[MDN - ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)

[ResizeObserver Polyfill](https://github.com/que-etc/resize-observer-polyfill)




## License

[MIT License](./LICENSE)

Copyright (c) Steven Ho <hi@stevenho.pro>
