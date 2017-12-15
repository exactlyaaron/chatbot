module.exports = {
  cache: {
    cacheId: 'chatbot',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'chatbot',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
