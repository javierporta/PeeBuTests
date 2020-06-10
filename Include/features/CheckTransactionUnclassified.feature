Feature: Check transaction unclassified
  As a user
  I want to know which transactions are unclassified
  So that I can classify  them
  
  Background:
  Given I have the browser open
    When I navigate to the URL

  Scenario: Check that an unclassified transaction is marked as unclassified
    Then I verify that an unclassified transaction is marked as unclassifed

  Scenario: Check that a classified transaction is marked as classified
		When I click in a classification row button Page_PeeBu/Classification/a_transportation_classify_vet_0_btn
    Then I verify that a classified transaction is marked as classified
