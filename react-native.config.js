module.exports = {
 project: {
  ios: {},
  android: {},
 },
 assets: ['./assets/fonts/'],
 '<dependency>': {
  platforms: {
   android: null, // disable Android platform, other platforms will still autolink
  },
 },
};
