// these are the existing steps for home page

let homePage = require('../../pages/Home.po.js');
let loginPage = require('../../pages/Login.po.js');
let landingPage = require('../../pages/Landing.po.js');

Given('I go to wikipedia home page', async function () {
   await browser.get(browser.params.baseURL);
   homePage.init();
});

When('I click on Login page button', async function () {
   await homePage.goToLoginPage();
   loginPage.init();
});

When(/^I click on (.*) link button$/, async function (page) {
   await homePage.clickOnPortalElement(page);
   landingPage.init();
});

Then('I verify that User Button text contains: {string}', async function (userName) {
   await expect(homePage.getUserButton().getText()).to.eventually.equal(userName);
});