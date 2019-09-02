const { BeforeAll, After, Status } = require('../node_modules/cucumber');
const { setDefaultTimeout } = require('../node_modules/cucumber');

// this hook method sets default timeout by using this parameter
BeforeAll(function () {
	setDefaultTimeout(browser.params.timeOut * 1000);
});

// after each scenario if it fails, this methods takes a screenshot and adds it to the report
After(function (testCase) {
	var world = this;
	if (testCase.result.status === Status.FAILED) {
		return browser.takeScreenshot().then(function (screenShot) {
			world.attach(screenShot, 'image/png');
		});
	}
});



