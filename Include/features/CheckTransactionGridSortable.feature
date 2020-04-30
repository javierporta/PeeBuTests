Feature: Check transaction grid is sortable
  As a user
  I want to sort transactions in the grid
  So that I can get some general information about my transactions

  Background: 
    Given I have the browser open
    When I navigate to the URL

  Scenario: Check that transacions are orderd by amount in ascending order
    When I click amount column
    Then I verify that grid is sorted by amount in ascending order

  Scenario: Check that transacions are orderd by amount in descending order
    When I click twice amount column
    Then I verify that grid is sorted by amount in descending order
