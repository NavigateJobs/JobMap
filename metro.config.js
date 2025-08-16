// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);





// const { getDefaultConfig } = require('@react-native/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig(__dirname);

//   return withNativeWind(defaultConfig, {
//     input: './global.css', // your Tailwind entry
//   });
// })();



const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
 
const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});
 
module.exports = withNativeWind(config, { input: "./global.css" });