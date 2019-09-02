// this is the page object for the Landing Page

var titleElement;
var logoElement;
var navigationElement;
var searchElement;

module.exports = {
	init: () => {
		titleElement = element(by.id("firstHeading"));
		logoElement = element(by.id("p-logo"));
		navigationElement = element(by.id("p-navigation"));
		searchElement = element(by.id("simpleSearch"));
	},

	getPageMainTitle: () => {
		return titleElement;
	},

	getLogo: () => {
		return logoElement;
	},

	getNavigationElement: () => {
		return navigationElement;
	},

	getSearchElement: () => {
		return searchElement;
	},

}