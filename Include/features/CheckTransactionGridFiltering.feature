Feature: Check transaction grid filtering
  As a user
  I want to filter transactions in the grid
  So that I can find the transaction I am looking for

  Scenario Outline: Check that grid string columns are filterable
    Given I have the browser open
    When I navigate to the URL
    Then I click <columnObjectId> filter
    And I type some <textToFilter> to filter
    And I click filter button
    Then I see only filtered transactions

    Examples: 
      | columnObjectId | textToFilter |
      | transactionId  |            1 |
      | entity         | Hilll Group  |
      | type           | withdrawal   |
      | source         | source 10    |

  Scenario: Check that created date is filterable
    Given I have the browser open
    When I navigate to the URL
    Then I click "createdDateColumnId" filter
    And I select a "startDate" to filter
    And I select a "endDate" to filter
    And I click filter button
    Then I see only filtered transactions

  Scenario: Check that amount is filterable
    Given I have the browser open
    When I navigate to the URL
    Then I click "amountColumnId" filter
    And I write a "biggerThanNumber" to filter
    And I write a "lessThanNumber" to filter
    And I click filter button
    Then I see only filtered transactions
