// this is the page object for the Login Page

var userInput;
let passInput;
let loginButton;

module.exports = {
	init:  () => {
		userInput = element(by.name("wpName"));
		passInput = element(by.name("wpPassword"));
		loginButton = element(by.name("wploginattempt"));
	},

	setUsername:  (userName) =>{
		return userInput.sendKeys(userName);
	},

	setPassword:  (password) => {
		return passInput.sendKeys(password);
	},

	clickOnLoginButton:  () => {
		return loginButton.click();
	}

}