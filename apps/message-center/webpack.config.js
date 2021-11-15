var webpack = require('webpack');

module.exports = {
    output: {
        publicPath: "http://localhost:3310/",
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            // For remotes (please adjust)
            name: "message_center",
            library: { type: "var", name: 'message_center' },
            filename: "remoteEntry.js",
            exposes: {
                './Module': 'apps/message-center/src/app/app.module.ts',
                './Widget': 'apps/message-center/src/app/message-center-widget/message-center-widget.component.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        }),
    ],
    mode: "production",
};