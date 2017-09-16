//Notes on this customization: https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d6913760

const path = require('path');

module.exports = function(config) {
  // Use your own ESLint file
  let eslintLoader = config.module.rules[0];
  eslintLoader.use[0].options.useEslintrc = true;

  // Add the SASS loader second-to-last
  // (last one must remain as the "file-loader")
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"]
  });
}