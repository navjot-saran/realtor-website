/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = {
//     async rewrites() {
//        return [
//          {
//             source: '/api/:path*',
//             destination: 'http://localhost:3000/:path*'
//          }
//       ]
//   }
// }

// module.exports = {
//     webpack: (config, { isServer }) => {
//         if (!isServer) {
//             config.node = {
//                 net: 'empty'
//             };
//         }

//         return config;
//     }
// }
