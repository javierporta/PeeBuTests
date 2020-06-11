Feature: Check transaction chart
  As a user
  I want to see top 5 expenses of the month in a chart
  So that I can have a big picture of my biggest expenses (or where I am spending my money)

  Background: 
    Given I have the browser open
    When I navigate to the URL
    And I click on show charts button

  Scenario: Check that expenses chart is displayed
    Then I verify that expenses chart is displayed

  Scenario: Check that income chart is displayed
    Then I verify that incomes chart is displayed

  Scenario: Check that classification chart is displayed
    Then I verify that classification chart is displayed

  Scenario: Check that latest transaction timeline is displayed
    Then I verify that latest transaction timeline is displayed
