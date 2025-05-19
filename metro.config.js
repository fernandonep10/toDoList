const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  // pluga o transformer de SVG
  config.transformer.babelTransformerPath = require.resolve(
    "react-native-svg-transformer"
  );
  // remove svg de assetExts pra Metro não tentar tratar .svg como binário
  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "svg"
  );
  // adiciona svg em sourceExts pra Metro compilar com o transformer
  config.resolver.sourceExts.push("svg");
  return config;
})();
