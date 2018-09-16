let LoginPage = require('../page_objects/login.page')
let ProductsPage = require('../page_objects/products.page')

describe('login suite', function () {
  it('login email is requiered error test', async function () {
    let loginPage = new LoginPage()

    await loginPage.open()
    await loginPage.login("", ">#MKIg>2o")
    browser.waitForAngular()

    expect(await loginPage.getSignInBtn().isEnabled()).toBe(false)
  })
})
