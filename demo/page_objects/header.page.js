//let LoginPage = require('./login.page')
//let ProductsPage = require('./products.page')
let AdminPage = require('./admin.page')
//let Button = require('../controls/button')

let productsMenuLocator = 'ul.navbar-nav li:nth-child(1) a'
//let administrationMenuLocator = 'ul.navbar-nav li:nth-child(2) a';
let administrationMenuLocator = 'ul.nav li:nth-of-type(2) a'
let xAdministrationMenuLocator = '/html/body/app/navbar/nav/div/div[2]/ul/li[2]/a'
// let xAdministrationMenuLocator = '/html/body/app/main/modules-navigator/products/div[2]/div/div[2]/div/button[1]'
let dropdownLocator = '.nav .dropdown div.user-data div:nth-of-type(2)'
let logoutDropdown = '.dropdown-toggle  .user-data'
//let logoutButton = 'ul.dropdown-menu .dropdown-item'
let logoutButton = 'ul.dropdown-menu li:nth-of-type(3)'

class HeaderPage {
  constructor() {}

  getProductsMenu() {
    return element(by.css(productsMenuLocator))
  }

  getAdministrationMenu() {
    return element(by.css(administrationMenuLocator))
  }

  getAdministrationMenuX() {
    return element(by.xpath(xAdministrationMenuLocator))
  }

  getDropdown() {
    return element(by.css(dropdownLocator))
  }
  getLogoutDropdown() {
    return element(by.css(logoutDropdown))
  }

  getLogoutButton() {
    return element(by.css(logoutButton))
  }
  async isHeaderVisible() {
    // TODO: does it give proper result <Promise> AND <Promise>?
    return this.getProductsMenu().isDisplayed() &&
      this.getAdministrationMenu().isDisplayed()
  }

  async isAdministrationMenuVisible() {
    return this.getAdministrationMenu().isDisplayed()
  }

  async isDropdownVisible() {
    return this.getDropdown().isDisplayed()
  }

  async selectAdmin() {
    await allure.createStep('Click Administration tab', async () => this.getAdministrationMenu().click())()
    return this
  }

  async clickAdministrationMenu() {
    await allure.createStep('Open Product page', async () => this.getAdministrationMenu().click())()
    //return this
    return new AdminPage()
  }

  // async openAdministrationMenu () {
  //await this.getAdministrationMenu().click()

  //return this
}


//async logout () {
//await this.getLogoutDropdown().click()
//browser.waitForAngular()
//await this.getLogoutButton().click()

//return this
//return new LoginPage()
//}


//}


module.exports = HeaderPage