
exports.config = {
  directConnect: true,


  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['test/*_spec.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 2500000
  }
};
