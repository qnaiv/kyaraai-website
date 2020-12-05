// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './assets/style/main.scss'

export default function (Vue, { router, head, isClient }) {
  if (isClient) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Slide = require('vue-burger-menu').Slide
    Vue.use(VueMasonryPlugin)
    Vue.component('Slide', Slide)
  }
  // head.meta.push({
  //   name: 'viewport',
  //   content: 'width=device-width, initial-scale=1.0',
  // })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
