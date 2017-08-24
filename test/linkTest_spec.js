var homepage = require('../page/Home.js');

describe('InStock homepage', function() {

  it('verify all links working', function() {

    homepage.get();
    homepage.verifyAllLinks();
  });
});
