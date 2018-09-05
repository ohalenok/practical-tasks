let LoginPage = require("../page_objects/login.page");

describe('login suite', function() {
    it('login pass test', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
      let productsPage = await loginPage.login("olena.halenok@gmail.com", ">#MKIg>2o");
      
      //await browser.sleep(5000);

      expect(productsPage.header.isHeaderVisible()).toEqual(true);
    });
});
