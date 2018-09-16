let LoginPage = require('../page_objects/login.page')
let ProductsPage = require('../page_objects/products.page')
let HeaderPage = require('../page_objects/header.page')

describe('login suite', function () {

  it('login pass test', async function () {
    let loginPage = new LoginPage()
    
    await loginPage.open()
    let productsPage = await loginPage.login('olena.halenok@gmail.com', '>#MKIg>2o')
    browser.waitForAngular()
    expect(await productsPage.header.isAdministrationMenuVisible()).toBe(true)
    
    //browser.waitForAngular()
    //await productsPage.header.logout()
    //await productsPage.header.getLogoutDropdown().click()
    //await headerPage.getLogoutDropdown().click()
    //browser.waitForAngular()
    //await productsPage.header.getLogoutButton().click()
  })
})
