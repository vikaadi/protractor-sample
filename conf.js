
exports.config = {
  directConnect: true,


  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['test/*_spec.js' ],
  onPrepare: function () {
         browser.driver.manage().window().setSize(1680, 1050);
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 2500000
  }
};
