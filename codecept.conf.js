const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    config:'./framework/config/config.js',
    LoginPage: "./framework/pages/LoginPage.js",
    mainMenuElements: "./framework/pages/MainMenuElements.js",
    userMenuElements:"./framework/pages/UserMenuElements.js"
  },
  name: 'codeceptjs_03_07_23'
}