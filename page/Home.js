'use strict';

module.exports = {
    elements: {
        depart: element(by.id('jdBookerDepart')),
        signIn: element(by.linkText('Sign in')),
        email: element(by.model('new_session[\'username\']')),
        password: element(by.model('new_session[\'password\']')),
        signInBtn: element(by.id('sign_in')),
        signInError: element(by.xpath('(//*[@class="site_login"]//p)[1]')),
        pricing: element(by.linkText('Pricing')),
        pricingPageHeader: element(by.css('div#plans-pricing h1')),
        pricePack: element.all(by.repeater('pack in creditPacks')),
        featuredPricePack: element.all(by.css('.featured-pack'))
    },

    get: function() {
        browser.manage().window().maximize();
        browser.get('http://www.istockphoto.com');
    },

    verifyAllLinks: function() {
      browser.waitForAngularEnabled(false);
      $$('a').map(function(link, text) {
        return link.getAttribute("href").then(function (href) {
          console.log(href);
          return String(href);//.replace(/www\:\/\/istockphoto\.com\//g, 'http://www.istockphoto.com');
            });
        return text.getText().then(function (text) {
          console.log(text);
          return String(text);//.replace(/www\:\/\/istockphoto\.com\//g, 'http://www.istockphoto.com');
            });
          }).then(function(links) {
              links.forEach(function(link, text) {
                if (link != 'null'){
                    browser.get(link);
                    expect(browser.getCurrentUrl()).not.toContain('/Error/');
                  }
                else {
                console.log("Url is null for :" + text)
              }
          });
        });
    },

    invalidUser: function(email, password) {
        var ele = this.elements;
        ele.signIn.isDisplayed().click();
        ele.email.isDisplayed().sendKeys(email);
        ele.password.isDisplayed().sendKeys(password);
        ele.signInBtn.isDisplayed().click();
        expect(ele.signInError.getText()).toEqual("Please verify that you've entered everything correctly.")
    },

    verifyPricingPage: function() {
      var ele = this.elements;
      ele.pricing.isDisplayed().click();
      ele.pricingPageHeader.isDisplayed();
      expect(ele.pricingPageHeader.getText()).toEqual("Save with flexible plans to suit every budget")
    },

    creditPacksCount: function() {
      var ele = this.elements;
      ele.pricePack.isDisplayed();
      expect(ele.pricePack.count()).toBe(10);
    },
    featuredCreditPackCount: function() {
      var ele = this.elements;
      ele.featuredPricePack.isDisplayed();
      expect(ele.featuredPricePack.count()).toBe(6);
    },

    creditPack: function() {
      var ele = this.elements;
      ele.featuredPricePack.isDisplayed();
      let price = $$('.credit-row-container').map(function(credit, index){
        return {
          index: index,
          credit: credit.getAttribute("data-credits"),
          price: credit.getAttribute("data-price")
        }
      });
      expect(price).toEqual([
        { index: 0, credit: '1', price: '12' },
        { index: 1, credit: '3', price: '33' },
        { index: 2, credit: '6', price: '60' },
        { index: 3, credit: '12', price: '115' },
        { index: 4, credit: '18', price: '170' },
        { index: 5, credit: '24', price: '220' },
        { index: 6, credit: '36', price: '325' },
        { index: 7, credit: '60', price: '520' },
        { index: 8, credit: '150', price: '1250' },
        { index: 9, credit: '300', price: '2400' }
      ]);

    },

    featuredCreditPack: function() {
      var ele = this.elements;
      ele.featuredPricePack.isDisplayed();
      let price = $$('.featured-pack .credit-row-container').map(function(credit, index){
        return {
          index: index,
          credit: credit.getAttribute("data-credits"),
          price: credit.getAttribute("data-price")
        }
      });
      expect(price).toEqual([
        { index: 0, credit: '3', price: '33' },
        { index: 1, credit: '6', price: '60' },
        { index: 2, credit: '12', price: '115' },
        { index: 3, credit: '24', price: '220' },
        { index: 4, credit: '36', price: '325' },
        { index: 5, credit: '60', price: '520' }
      ]);

    }

};
