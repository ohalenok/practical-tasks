
let loginBtnLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passInputLocator = "#userPassword";
let signInBtnLocator = ".iframe-wrap .login-button";

class LoginPage{
    constructor() {}

    getLoginBtn() {
        return element(by.css(loginBtnLocator));
    }

    getEmailInput() {
        return element(by.css(emailInputLocator));
    }

    getPassInput() {
        return element(by.css(passInputLocator));
    }

    getSignInBtn() {
        return element(by.css(signInBtnLocator));
    }

    async open() {
        await browser.get('http://eds_university.eleks.com');
        return this;
    }

    async login(email, pass){
        await this.getLoginBtn().click();
        await this.getEmailInput().click(email);
        await this.getPassInput().sendKeys(pass);
        await this.getSignInBtn().click();
    }
}

module.exports = LoginPage;