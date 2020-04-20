Feature: Check transactions are displayed
  As a user
  I want to see my transactions
  So I can manage my spendings

  Background: 
    Given I have the browser open

  Scenario: Check if grid is loaded
    When I navigate to the URL
    Then I verify that the transactions grid is present

  Scenario Outline: Check if all columns are rendered
    When I navigate to the URL
    Then I verify that the column <objectId> is in the grid

    Examples: 
      | objectId                                     |
      | Object Repository/Page_PeeBu/th_Id           |
      | Object Repository/Page_PeeBu/th_Created Date |
      | Object Repository/Page_PeeBu/th_Entity       |
      | Object Repository/Page_PeeBu/th_Price        |
      | Object Repository/Page_PeeBu/th_Type         |
      | Object Repository/Page_PeeBu/th_Source       |

  Scenario: Check if data was fetched
    When I navigate to the URL
    Then I verify that transactions are being displayed in the grid
