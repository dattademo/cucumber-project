#Login.feature
Feature: Wikipedia Login Testing
	I should be able to go to Wikipedia loging page
	and login correctly

	Scenario: Success login
		Given I go to wikipedia home page
		When I click on Login page button
		When I set username: "TestUserForJS"
		When I set password: "devTest1234"
		When I click on login button
		Then I verify that User Button text contains: "TestUserForJS"
		