const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    distDir: 'build',
    trailingSlash: true,
    optimizeFonts: false,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
}