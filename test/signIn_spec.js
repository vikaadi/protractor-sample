var homepage = require('../page/Home.js');
var email = 'invalid@invalid.com';
var password = 'invaidpassword'

describe('In Stock - Invalid User Test', function() {

  it('should display error message', function() {
    homepage.get();
    homepage.invalidUser(email, password);
  });
});
