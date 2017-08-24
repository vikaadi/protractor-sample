  var homepage = require('../page/Home.js');

describe('angularjs homepage', function() {

  it('should greet the named user', function() {

    homepage.get();
    homepage.verifyAllLinks();
  });
});
