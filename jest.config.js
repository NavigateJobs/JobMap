module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@react-navigation|react-native-screens|react-native-safe-area-context|nativewind|react-native-worklets|react-native-css-interop|react-native-vector-icons)/)"
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js'
  }
};
