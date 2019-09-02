// these are the existing steps for Landing page

let landingPage = require('../../pages/Landing.po.js');

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