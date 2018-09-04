let LoginPage = require("../page_objects/login.page");

describe('login suite', function() {
    it('login pass test', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
      await loginPage.login("olena.halenok+scorer@gmail.com", "q79iFw(Ew");
  
      //expect(greeting.getText()).toEqual('Hello Julie!');
    });
});
