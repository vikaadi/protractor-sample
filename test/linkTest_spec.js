var homepage = require('../page/Home.js');

xdescribe('angularjs homepage', function() {

  it('Verify All Links working', function() {

    homepage.get();
    homepage.verifyAllLinks();
  });
});
