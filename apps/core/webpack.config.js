var webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// Try the environment variable, otherwise use root
const __webpack_public_path__ = process.env.ASSET_PATH || '/';

module.exports = {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './apps/core/tsconfig.app.json',
      })
    ]
  },
  output: {
    publicPath: __webpack_public_path__,
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      // For hosts (please adjust)
      remotes: {
        "core": "core@http://localhost:3000/remoteEntry.js",
        "service_overview": "service_overview@http://localhost:3110/remoteEntry.js",
        "skin_vision": "skin_vision@http://localhost:3001/remoteEntry.js",
        "medication": "medication@http://localhost:3120/remoteEntry.js",
        "message_center": "message_center@http://localhost:3310/remoteEntry.js",
        "account_management": "account_management@http://localhost:3222/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, eager: true },
        "@angular/common": { singleton: true, eager: true },
        "@angular/common/http": { singleton: true, eager: true },
        "@angular/router": { singleton: true, eager: true },
        "@angular/flex-layout": { singleton: true, eager: true },
      }
    })
  ],
};
