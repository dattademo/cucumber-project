#LandingPages.feature
Feature: Wikipedia Landing Pages Testing
	User should be able to go to Wikipedia landing pages

	Scenario Outline: Portal Landing Pages test : <page> 
		Given I go to wikipedia home page
		And I click on <page> link button
		Then I see <titleText> landing page
		Then I see Wikipedia logo
		Then I see Navigation component
		Then I see Simple search component
		

	Examples:
	|page               |titleText                           |
	|Artes              |Portal:Arte                         |
	|Ciencias sociales  |Portal:Ciencias humanas y sociales  |
	|Ciencias naturales |Portal:Ciencias naturales           |
	|Tecnologías        |Portal:Tecnología                   |
	|Religión           |Portal:Religión                     |