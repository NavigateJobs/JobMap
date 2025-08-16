module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!react-native|@react-native|nativewind|react-native-worklets)"
  ],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js'
  }
};
