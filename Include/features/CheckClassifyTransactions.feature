Feature: Check classify transactions
  As a user
  I want to classify transactions
  So that I can create charts related with that information

  Background: 
    Given I have the browser open
    When I navigate to the URL

  Scenario: Check all classifications are displayed in a grid row
    Then I verify that classifications are displayed in a grid row

 