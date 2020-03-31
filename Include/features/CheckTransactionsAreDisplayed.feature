Feature: Check transactions are displayed
  As a user
  I want to see my transactions
  So I can manage my spendings

  Scenario: Check if grid is loaded
    Given I have the browser open
    When I navigate to the URL
    Then I verify that the transactions grid is present

  Scenario Outline: Check if all columns are rendered
    Given I have the browser open
    When I navigate to the URL
    Then I verify that the columns are in the grid

    Examples: 
      | objectId      |
      | transactionId |
      | createdDate   |
      | entity        |
      | amount        |
      | type          |
      | source        |

  Scenario: Check if data was fetched
    Given I have the browser open
    When I navigate to the URL
    Then I verify that transactions are being displayed in the grid
