/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['styled-components']);

module.exports = withTM({
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['www.facebook.com', 'localhost'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  });


// /** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",
// });

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
// };

// module.exports = withPWA(nextConfig);