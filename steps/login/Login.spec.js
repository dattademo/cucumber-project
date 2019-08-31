var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


let homePage = require('../../pages/Home.po.js');
let loginPage = require('../../pages/Login.po.js');

Given('I go to wikipedia home page', async function () {
   await browser.get(browser.params.baseURL);
   homePage.init();
});

When('I click on Login page button', async function () {
   await homePage.goToLoginPage();
   loginPage.init();
});

When('I set username: {string}', async function (userName) {
   await loginPage.setUsername(userName);
});

When('I set password: {string}', async function (password) {
   await loginPage.setPassword(password);

});

When('I click on login button', async function () {
   await loginPage.clickOnLoginButton();
});

Then('I verify that User Button text contains: {string}', async function (userName) {
   await expect(homePage.getUserButton().getText()).to.eventually.equal(userName);
});