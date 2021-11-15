var webpack = require('webpack');

module.exports = {
    output: {
        publicPath: "http://localhost:3001/",
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            // For remotes (please adjust)
            name: "skin_vision",
            library: { type: "var", name: 'skin_vision' },
            filename: "remoteEntry.js",
            exposes: {
                './Module': 'apps/skin-vision/src/app/skin-vision/skin-vision.module.ts',
                './Widget': 'apps/skin-vision/src/app/skin-vision-widget/skin-vision-widget.component.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        }),
    ],
    mode: "production",
};