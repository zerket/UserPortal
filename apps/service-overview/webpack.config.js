var webpack = require('webpack');

module.exports = {
    output: {
        publicPath: "http://localhost:3110/",
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            // For remotes (please adjust)
            name: "service_overview",
            library: { type: "var", name: 'service_overview' },
            filename: "remoteEntry.js",
            exposes: {
                './Module': 'apps/service-overview/src/app/service-overview/service-overview.module.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        }),
    ],
    mode: "production",
};