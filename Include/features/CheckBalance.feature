Feature: Check balance is calculated and displayed
  As a user
  I want to see my current balance
  So that I can manage my transactions

  Background: 
    Given I have the browser open
    When I navigate to the URL

  Scenario: Check that balance label is displayed
    Then I verify the balance label is present

    
   Scenario: Check that balance value is displayed
    Then I verify the balance value is present