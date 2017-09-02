var homepage = require('../page/Home.js');

describe('Plans & Pricing page verification', function() {

  it('should display pricing header', function() {
    homepage.get();
    homepage.verifyPricingPage()
  });

  it('Verify All Credit pack cuont', function() {
    homepage.creditPacksCount()
  });

  it('Verify Featured Credit pack count', function() {
    homepage.featuredCreditPackCount()
  });

  it('Verify Credit pack & price', function() {
    homepage.creditPack()
  });

  it('Verify Featured Credit pack & price', function() {
    homepage.featuredCreditPack()
  });
});
