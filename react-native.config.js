// document: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md

module.exports = {
  dependencies: {
    'react-native-ble-plx': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
};
