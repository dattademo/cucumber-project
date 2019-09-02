// this is the page object for the HOme Page

let loginButton;
let userButton;
let mainPortElement;

module.exports = {
	init: () => {
		loginButton = element(by.id("pt-login"));
		userButton = element(by.id("pt-userpage"));
		mainPortElement = element(by.id("main-port"));
	},
	get: (string) => {
		return browser.get(string);
	},

	goToLoginPage: () => {
		return loginButton.click();
	},

	getUserButton: () => {
		return userButton;

	},

	clickOnPortalElement: (elementTitle) => {
		var currentElement = mainPortElement.element(by.linkText(elementTitle));
		browser.executeScript("arguments[0].scrollIntoView();", currentElement.getWebElement());
		return currentElement.click();
	},

}