const path = require('path')

module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/riskProfiler',
            permanent: true,
          },
        ]
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
}