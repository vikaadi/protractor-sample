'use strict';

module.exports = {
    elements: {
        depart: element(by.id('jdBookerDepart')),
        signIn: element(by.linkText('Sign in')),
        email: element(by.model('new_session[\'username\']')),
        password: element(by.model('new_session[\'password\']')),
        signInBtn: element(by.id('sign_in')),
        signInError: element(by.xpath('(//*[@class="site_login"]//p)[1]'))
    },

    get: function() {
        browser.manage().window().maximize();
        browser.get('http://www.istockphoto.com'); //overrides baseURL
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
    }
};
