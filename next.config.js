module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config

        // Important: return the modified config
        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config

        // Important: return the modified config
        return config
    },

    // declare here your static exports
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/history': { page: '/history' },
            '/es6': { page: '/es6' },
            '/boilerplates': { page: '/boilerplates' },
            '/github': { page: '/github' },
            '/next': { page: '/next' },
            '/demo1': { page: "/demo1" }
        }
    }
}