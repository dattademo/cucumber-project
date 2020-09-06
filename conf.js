
//protractor.conf.js
const envFile = require("./config/env")

exports.config = {
	directConnect: true, // avoid using a dedicated console terminal to start the webdriver
	framework: 'custom',
	// path relative to the current config file
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	reporter: require('cucumber-html-reporter'),
	capabilities: {
		'browserName': 'chrome'
	},

	params: {
		env: "test", // test environment: default value:test. can be overwritten be console (--params.env=prod)
		baseURL: envFile.testUrl, // testURL by default. can be overwritten be console (--params.env=prod)
		timeOut: 20, // default timeout: 20 seconds, can be overwritten be console (--params.timeOut=40)
	},

	// Spec patterns are relative to this directory.
	specs: [
		'./features/*/*.feature'
	],
	// these are the available suites to run, i.e.: protractor conf.js --suite=login
	suites: {
		completeRegression: './features/*/*.feature',
		login: './features/login/*.feature',
		landing: './features/landing pages/*.feature'
	},

	cucumberOpts: {
		require: ['./steps/*/*.js', './support/*.js'],
		tags: false,
		profile: false,
		format: 'json:./report/results.json',
		'no-source': true
	},

	onPrepare: function () {
		// browser settings
		browser.params.baseURL = eval("envFile." + browser.params.env + "Url");
		browser.ignoreSynchronization = true;
		browser.driver.manage().window().maximize();

		// cucumber's keywords are declared globally so all the spec files can use them directly 
		const { After, Given, Then, When, Before } = require('cucumber');
		global.Given = Given;
		global.When = When;
		global.Then = Then;
		global.Before = Before;
		global.After = After;

		// chai expect is declared globally
		var chai = require('chai');
		var chaiAsPromised = require('chai-as-promised');
		chai.use(chaiAsPromised);
		global.expect = chai.expect;
	},

	onComplete: function () {
		browser.getCapabilities().then((caps) => {

			// specific values are taken from the browser's capabilities
			var broserName = caps.get('browserName').toUpperCase();
			var broserVersion = caps.get('version');
			var envName = browser.params.env.toUpperCase();

			// these are the options for the html report created after the suite is finished
			// for more information on this go to: https://www.npmjs.com/package/cucumber-html-reporter
			var options = {
				screenshotsDirectory: './report/screenshots/',
				storeScreenshots: true,
				launchReport: true,
				reportSuiteAsScenarios: true,
				theme: 'bootstrap',
				jsonFile: './report/results.json',
				output: './report/cucumber_report.html',
				name: "Wikipedia Test Suite", // this is the report title
				brandTitle: "Smoke Test", // this is the report brand title
				columnLayout: 1,
				metadata: {
					"Test Environment": envName,
					"Browser": broserName + " - " + broserVersion,
				}
			};
			this.reporter.generate(options);
		});



	}
};