Feature: Check transaction grid is sortable
  As a user
  I want to sort transactions in the grid
  So that I can get some general information about my transactions

  Scenario: Check that it is possible to sort the grid by amount
    Given I have the browser open
    When I navigate to the URL
    And I click "amountColumnObjectId" column
    Then I verify that grid is sorted by amount
