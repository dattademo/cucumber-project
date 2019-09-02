// these are the existing steps for Login page

let loginPage = require('../../pages/Login.po.js');

When('I set username: {string}', async function (userName) {
   await loginPage.setUsername(userName);
});

When('I set password: {string}', async function (password) {
   await loginPage.setPassword(password);
});

When('I click on login button', async function () {
   await loginPage.clickOnLoginButton();
});