var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let homePage = require('../../pages/Home.po.js');
let landingPage = require('../../pages/Landing.po.js');

When(/^I click on (.*) link button$/, async function (page) {
  await homePage.clickOnPortalElement(page);
  await landingPage.init();
});

Then(/^I see (.*) landing page$/, async function (titleText) {
  //  await  expect(landingPage.getPageMainTitle().isPresent()).to.eventually.be.true;
  await expect(landingPage.getPageMainTitle().isPresent()).to.eventually.be.true;
  await expect(landingPage.getPageMainTitle().getText()).to.eventually.contain(titleText);
});

Then('I see Wikipedia logo', async function () {
  await expect(landingPage.getLogo().isPresent()).to.eventually.be.true;
});

Then('I see Navigation component', async function () {
  await expect(landingPage.getNavigationElement().isPresent()).to.eventually.be.true;
});

Then('I see Simple search component', async function () {
  await expect(landingPage.getSearchElement().isPresent()).to.eventually.be.true;
});