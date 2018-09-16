let LoginPage = require('../page_objects/login.page')
let AdminPage = require('../page_objects/admin.page')
//let ProductsPage = require('../page_objects/products.page')
//let HeaderPage = require('../page_objects/header.page')

//logoutDropdown = '.dropdown-toggle  .caret'
//logoutButton = 'ul.dropdown-menu .dropdown-item'

describe('new product', function () {
  // beforeAll(function(done) {
  //  $(done);
  //  console.log("DOM fully loaded and parsed");
  // })
  // beforeEach(function(done) {
  //  $(done);
  //  console.log("DOM fully loaded and parsed");
  // })  //afterEach(function () {
  //
  //  // element(by.css(logoutDropdown)).click()
  //  // element(by.css(logoutButton)).click()
  //  let loginPage = new LoginPage()
  //  //loginPage.logout()
  //
  //  await loginPage.logout()
  //  console.log("After Each block")
  //
  // })

   it('add new product', async function () {
    let loginPage = new LoginPage()
    //let headerPage = new HeaderPage()
    
    await loginPage.open()
    let productsPage = await loginPage.login('olena.halenok@gmail.com', '>#MKIg>2o')
    browser.waitForAngular()

    let adminPage = await productsPage.header.clickAdministrationMenu()
    browser.waitForAngular()

    expect(await adminPage.isTabProductsVisible()).toBe(true)

    //let nextPage = await adminPage.clickAddProdLink()
    //browser.waitForAngular()

    //expect(await nextPage.isSaveButtonVisible()).toBe(true)


    //browser.waitForAngular()
    //let adminPage = await productsPage.header.isAdministrationMenuVisible()

    //browser.waitForAngular()
    //expect(await productsPage.header.isAdministrationMenuVisible()).toBe(true)

    //expect(await adminPage.getAddProdLink().isDisplayed()).toBe(true)

  })
})



  //  expect(browser.getTitle()).toEqual('Eleks')
  // })

  //*it('select administration menu', async function () {
    //let loginPage = new LoginPage()

   // await loginPage.open()
    //let productsPage = await loginPage.login('olena.halenok@gmail.com', '>#MKIg>2o')
    //let administrationPage = await header.openAdministrationMenu()
    
   // expect(await productsPage.getAddProdLink().isVisible()).toBe(true)
    //await browser.sleep(250000);

    // expect(await productsPage.header.isHeaderVisible()).toEqual(true)
    // console.log("After isHeaderVisible block")
    // expect(await productsPage.header.isDropdownVisible()).toEqual(true)
    // console.log("After isDropdownVisible block")
    // expect(await productsPage.header.getAdministrationMenu().isPresent()).toBe(true)

    // browser.waitForAngular();
    // expect(await productsPage.header.isButtonVisible()).toBe(true)
    // console.log("After isButtonVisible block")
    // browser.refresh()

    // browser.waitForAngular()
    // await productsPage.header.openAdministrationMenu()
    // console.log('After ProductsPage block')
    // browser.refresh()
    // browser.waitForAngular()
    // expect(await productsPage.isTabProductsVisible()).toBe(true)
  //})

  // it('add product test', async function () {
  //   browser.driver.navigate().refresh()
  //   browser.refresh()
  //   console.log("After refresh block")
  //   expect(browser.getTitle()).toEqual('Eleks')
  //   console.log('After getTitle block')
  //   let productsPage = new ProductsPage()
  //   await productsPage.open()
  //   console.log(productsPage)

  //   await productsPage.header.openAdministrationMenu()
  //   console.log("After ProductsPage block")

  //   expect(await productsPage.header.isHeaderVisible()).toEqual(true)
  //   console.log('After expect block')
  //   await loginPage.logout()
  // })
//})
