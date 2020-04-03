Feature: Check transaction unclassified
  As a user
  I want to know which transactions are unclassified
  So that I can classify  them

  Scenario: Check that an unclassified transaction is marked as unclassified
    Given I have the browser open
    When I navigate to the URL
    Then I verify that an unclassified transaction is marked as unclassifed

  Scenario: Check that a classified transaction is marked as classified
    Given I have the browser open
    When I navigate to the URL
    Then I verify that a classified transaction is marked as classified
