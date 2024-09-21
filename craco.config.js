const path = require('path');

module.exports = {
  webpack: {
    alias: {
        '@component': path.resolve(__dirname, 'src/components/component'),
      '@page': path.resolve(__dirname, 'src/pages/'),
      '@ui': path.resolve(__dirname, 'src/components/ui/'),
      '@asset': path.resolve(__dirname, 'src/assets/')
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    }
  }
};
