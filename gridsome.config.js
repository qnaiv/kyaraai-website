// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: `Gridsome`,
  pathPrefix: `/kyaraai-website`,
  plugins: [
    {
      use: `gridsome-plugin-typescript`,
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'About',
        baseDir: './src/assets/content',
        path: 'about/**/*.md',
        resolveAbsolutePaths: true,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Artwork',
        baseDir: './src/assets/content',
        path: 'artwork/**/*.md',
        resolveAbsolutePaths: true,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'News',
        baseDir: './src/assets/content',
        path: 'news/**/*.md',
        resolveAbsolutePaths: true,
      },
    },
  ],
  templates: {
    Artwork: '/artwork/:id',
    News: '/news/:id',
  },
}
