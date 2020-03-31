Feature: Check transaction chart
  As a user
  I want to see top 5 expenses of the month in a chart
  So that I can have a big picture of my biggest expenses (or where I am spending my money)

  Scenario: Check if chart is displayed
    Given I have the browser open
    When I navigate to the URL
    And I click on show chart button
    Then I verify that top 5 chart is displayed
