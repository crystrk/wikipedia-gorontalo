module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Wikipedia Gorontalo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Wikipedia Gorontalo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://picturepan2.github.io/spectre/img/spectre-logo.svg' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fff' },
  /*
  ** Build configuration
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    '@/assets/gorontalo.scss'
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // proxyHeaders: false
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    base: '/wikipedia-gorontalo/' /* production -- npm run generate */
    // base: '/' /* dev */
  }
}
