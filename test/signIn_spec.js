var homepage = require('../page/Home.js');

describe('In Stock - Invalid User Test', function() {

  it('should display error message', function() {

    homepage.get();
    homepage.invalidUser('invalidemailid', 'invalidpassword');
  });
});
