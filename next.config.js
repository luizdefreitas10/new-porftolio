/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['styled-components']);

module.exports = withBundleAnalyzer(
  withTM({
    reactStrictMode: true,
    images: {
      domains: [], // Adicione quaisquer domínios necessários para suas imagens aqui
    },
    webpack: (config, { isServer, defaultLoaders }) => {
      // if (isServer) {
      //   require('./scripts/generate-sitemap');
      // }

      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '/_next/static/',
              outputPath: 'static/',
              name: '[name].[ext]',
            },
          },
        ],
      });

      return config;
    },
  })
);


