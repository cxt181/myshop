const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});
//适配rem
// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
//
// module.exports = {
//   outputDir: 'dist',
//   publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           pxtorem({
//             rootValue: 37.5,
//             propList: ['*']
//           })
//         ]
//       }
//     }
//   }
// };

