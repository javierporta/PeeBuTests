Feature: Check landing page is loaded
  As a user 
  I want to navigate to {insertMyWebURL}
  So that I can see the landing page

  Scenario: Check title of the page is present
    Given I have the browser open
    When I navigate to the URL
    Then I verify that the header "PeeBu" is present

  Scenario Outline: Check elements are present
    Given I have the browser open
    When I navigate to the URL
    Then I verify that the element <elementId> is present

    Examples: 
      | elementId            |
      | headerId             |
      | gridId               |
      | displayChartButtonId |
      | chartId              |
