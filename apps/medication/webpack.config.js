var webpack = require('webpack');

module.exports = {
    output: {
        publicPath: "http://localhost:3120/",
    },
    optimization: {
        runtimeChunk: false
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: "medication",
            library: { type: "var", name: 'medication' },
            filename: "remoteEntry.js",
            exposes: {
                './Module': 'apps/medication/src/app/app.module.ts',
                './Widget': 'apps/medication/src/app/medication-widget/medication-widget.component.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        }),
    ],
    mode: "production",
};