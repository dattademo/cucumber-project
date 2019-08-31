const { BeforeAll, After, Status } = require('../node_modules/cucumber');
const { setDefaultTimeout } = require('../node_modules/cucumber');

BeforeAll(function () {
	setDefaultTimeout(browser.params.timeOut * 1000);
});

After(function (testCase) {
	var world = this;
	if (testCase.result.status === Status.FAILED) {
		return browser.takeScreenshot().then(function (screenShot) {
			world.attach(screenShot, 'image/png');
		});
	}
});



