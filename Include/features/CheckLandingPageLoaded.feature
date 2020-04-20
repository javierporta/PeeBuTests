Feature: Check landing page is loaded
  As a user 
  I want to navigate to {insertMyWebURL}
  So that I can see the landing page

	Background:
	Given I have the browser open

  Scenario: Check title of the page is present
    When I navigate to the URL
    Then I verify that the header "PeeBu" is present

  Scenario Outline: Check elements are present
    When I navigate to the URL
    Then I verify that the element <objectId> is present

    Examples: 
      | objectId                                                  |
      | Object Repository/Page_PeeBu/h1_Home                      |
      | Object Repository/Page_PeeBu/h2_Transactions              |
      | Object Repository/Page_PeeBu/button_Show Chart            |
      | Object Repository/Page_PeeBu/footer_Polythecnic Of Leiria |
