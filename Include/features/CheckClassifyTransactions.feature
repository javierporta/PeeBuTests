Feature: Check classify transactions
  As a user
  I want to classify transactions
  So that I can create charts related with that information

  Background: 
    Given I have the browser open
    When I navigate to the URL

  Scenario: Check all classifications are displayed in a grid row
    Then I verify that classifications are displayed in a grid row

  Scenario: Check transactions are unclassified when initialized
    Then I verify that transactions are unclassified

  Scenario Outline: Check transactions can be classified
    When I click in a classification row button <rowClassificationButton>
    Then I verify that transaction classification was updated <rowClassificationColumn> with <classificationName>

    Examples: 
      | classificationName | rowClassificationButton                                                 | rowClassificationColumn                                          |
      | food               | Page_PeeBu/Classification/a_Unclassified_classify_food_0_btn            | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |
      | health             | Page_PeeBu/Classification/a_food_classify_health_0_btn                  | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |
      | education          | Page_PeeBu/Classification/a_health_classify_education_0_btn             | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |
      | household          | Page_PeeBu/Classification/a_education_classify_household_0_btn          | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |
      | entertainment      | Page_PeeBu/Classification/a_household_classify_entertainment_0_btn      | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |
      | transportation     | Page_PeeBu/Classification/a_entertainment_classify_transportation_0_btn | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |
      | vet                | Page_PeeBu/Classification/a_transportation_classify_vet_0_btn           | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |
      | others             | Page_PeeBu/Classification/a_vet_classify_others_0_btn                   | Object Repository/Page_PeeBu/Classification/Classification_Row_1 |

  Scenario: Check transactions are autoclassified when possible
    #   When I classify a transaction which has a pattern that matches other transactions to be autoclassified
    When I click in a classification row button Page_PeeBu/Classification/svg_entertainment_50
    Then I verify that transactions that match the pattern were autoclassified
