Feature: Check transaction grid is grouping
  As a user
  I want to group transactions in the grid
  So that I can get some general information about my transactions

  Scenario: Check that transactionType column is groupable
    Given I have the browser open
    When I navigate to the URL
    And I click "groupByTransactionObjectId" filter
    Then I verify grid is grouped by transactionType
