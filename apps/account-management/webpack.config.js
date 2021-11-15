var webpack = require('webpack');

module.exports = {
    output: {
        publicPath: "http://localhost:3222/",
    },
    optimization: {
        runtimeChunk: false
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: "account_management",
            library: { type: "var", name: 'account_management' },
            filename: "remoteEntry.js",
            exposes: {
                './Module':          'apps/account-management/src/app/patient-details/patient-details.module.ts',
                './Widget':          'apps/account-management/src/app/patient-gp-details/patient-gp-details.component.ts',
                './UserDetailsTopbarWidget': 'apps/account-management/src/app/user-details-topbar/user-details-topbar.component.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router", "@angular/common/http"]
        }),
    ],
    mode: "production",
};