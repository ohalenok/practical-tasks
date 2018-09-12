let ProductsPage = require('./products.page')
let Button = require('../controls/button')
let Input = require('../controls/input')

let loginBtnLocator = '.login-panel .login-button'
let emailInputLocator = '#email'
let passInputLocator = '#userPassword'
let signInBtnLocator = '.iframe-wrap .login-button'
let loginErrorMessage = '.toast-error .toast-message'
let logoutDropdown = '.dropdown-toggle  .caret'
let logoutButton = 'ul.dropdown-menu .dropdown-item'

class LoginPage {
  constructor () {}

  getLoginBtn () {
    return new Button(element(by.css(loginBtnLocator)), 'Login button')
  }

  getEmailInput () {
    return new Input(element(by.css(emailInputLocator)), 'Email input')
  }

  getPassInput () {
    return new Input(element(by.css(passInputLocator)), 'Password input')
  }

  getSignInBtn () {
    return new Button(element(by.css(signInBtnLocator)), 'Sign in button')

  }

  getErrorMessage () {
    return element(by.css(loginErrorMessage))
  }

  getLogoutDropdown () {
    return element(by.css(logoutDropdown))
  }

  getLogoutButton () {
    return element(by.css(logoutButton))
  }

  async open () {
    browser.driver.manage().window().maximize()
    await browser.get('http://eds_university.eleks.com')
    return this
  }

  async login (email, pass) {
    await allure.createStep('Click login button', async() =>  await this.getLoginBtn().click())();
    await allure.createStep('Enter email "${email}" and password "$(pass)"', async () => {
      await this.getEmailInput().sendKeys(email);
      await this.getPassInput().sendKeys(pass);
    })();
    await allure.createStep('Click sign in button', async () =>  await this.getSignInBtn().click())()

    return new ProductsPage()
  }

  async loginError (email, pass) {
    await this.getLoginBtn().click()
    await this.getEmailInput().sendKeys(email)
    await this.getPassInput().sendKeys(pass)
    await this.getSignInBtn().click()

    return this
  }

  async logout () {
    await this.getLogoutDropdown().click()
    await this.getLogoutButton().click()

    return this
  }
}

module.exports = LoginPage
