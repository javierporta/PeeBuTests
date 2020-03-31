Feature: Check set category
  As a user
  I want to set the category of a transaction
  So that I can have my transaction organized by categories

  Scenario: Check if all categories are displayed on cateogry dropdown
    Given I have the browser open
    When I navigate to the URL
    And I click on set category
    Then I verify that categories are displayed in the modal dropdown

  Scenario: Check that category modal cancel button cancels operation
    Given I have the browser open
    When I navigate to the URL
    And I click on set category
    And I set a category from the list
    And I cancel modal
    Then I verify that category did not change

  Scenario: Check that category modal OK button submit operation
    Given I have the browser open
    When I navigate to the URL
    And Click on set category
    And Set a category from the list
    And Accept modal
    Then I verify that category was set correctly in the list
