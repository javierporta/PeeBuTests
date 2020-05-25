#NOTE: As all columns are groupable, there is no need to test grouping since there is no code in Peebu involved grouping. (if client would require some columns to be groupable an others not, this file does make sense)
#Grouping Peebu feature relies 100% in kendo grouping feature, which has its own unit tests as well.
#That's why this feature won't be developed.

Feature: Check transaction grid is grouping
  As a user
  I want to group transactions in the grid
  So that I can get some general information about my transactions

  Scenario: Check that transactionType column is groupable
    Given I have the browser open
    When I navigate to the URL
    And I click "groupByTransactionObjectId" filter
    Then I verify grid is grouped by transactionType
