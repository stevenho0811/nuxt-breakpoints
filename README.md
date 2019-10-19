# nuxt-breakpoints

> Resize observer breakpoints with Nuxt.js module.

[![NPM](https://nodei.co/npm/nuxt-breakpoints.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nuxt-breakpoints/)
[![Codecov](https://codecov.io/gh/steven0811/nuxt-breakpoints/branch/master/graph/badge.svg)](https://codecov.io/gh/steven0811/nuxt-breakpoints)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

>

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
## Options
| property | type                                        | default                           | note                                                                                                                                                                                                                          |
|----------|---------------------------------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| xs       | none                                        | none                              | <= 576px                                                                                                                                                                                                                      |
| sm       | number                                      | 576                               | >= 576px && <= 768px                                                                                                                                                                                                          |
| md       | number                                      | 768                               | >= 768px && <= 992px                                                                                                                                                                                                          |
| lg       | number                                      | 992                               | >= 992px && <= 1200px                                                                                                                                                                                                         |
| xl       | number                                      | 1200                              | >= 1200px                                                                                                                                                                                                                     |
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

Copyright (c) Steven Ho <shockshocksoul@gmail.com>