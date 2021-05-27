// /* eslint-disable no-param-reassign */
// /* eslint-disable no-param-reassign */
// module.exports = {
//   type: 'react-component',
//   npm: {
//     cjs: true,
//     esModules: true,
//     umd: false,
//   },
//   webpack: {
//     config(config) {
//       config.entry = ['./src/index.js'];
//       config.resolve.extensions.push('.ts', '.tsx');
//       config.module.rules.push(
//         {
//           test: /\.(ts|tsx)?$/,
//           loader: 'awesome-typescript-loader',
//         },
//         {
//           test: /\.scss$/,
//           use: [
//             'style-loader', // creates style nodes from JS strings
//             'css-loader', // translates CSS into CommonJS
//             'sass-loader', // compiles Sass to CSS, using Node Sass by default
//           ],
//         }
//       );
//       return config;
//     },
//   },
// };
// // // module.exports = {
// // //   type: 'react-component',
// // //   npm: {
// // //     esModules: true,
// // //     umd: false,
// // //   },
// // // };
// // // module.exports = () => {
// // //   return {
// // //     type: 'react-component',
// // //     npm: {
// // //       esModules: true,
// // //       // umd: {
// // //       //   global: 'NWBBoilerplate',
// // //       //   externals: {
// // //       //     react: 'React',
// // //       //   },
// // //       // },
// // //     },
// // //     webpack: {
// // //       config: config => {
// // //         config.entry = './src/components/userMenu/index.ts';
// // //         // config.entry = './src/index';
// // //         return config;
// // //       },
// // //       extra: {
// // //         resolve: {
// // //           extensions: ['.ts', '.tsx', '.js', '.jsx'],
// // //         },
// // //         module: {
// // //           rules: [
// // //             { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
// // //             {
// // //               test: /\.(ts|tsx)$/,
// // //               enforce: 'pre',
// // //               loader: 'eslint-loader',
// // //               exclude: /node_modules/,
// // //             },
// // //           ],
// // //         },
// // //       },
// // //     },
// // //   };
// // // };
