Feature: Check transaction grid filtering
  As a user
  I want to filter transactions in the grid
  So that I can find the transaction I am looking for

  Background: 
    Given I have the browser open
    When I navigate to the URL

  Scenario Outline: Check that grid string columns are filterable
    When I click <columnObjectId> column filter
    And I type some <textToFilter> in <inputObjectId> to filter
    And I click filter button
    Then I see only filtered transactions with <textToFilter> 

    Examples: 
      | columnObjectId                                             | inputObjectId                                                                   | textToFilter |
      | Object Repository/Page_PeeBu/span_Source_k-icon k-i-filter | Object Repository/Page_PeeBu/input_Contains_k-textbox FilterInput Source | source 10    |
     # | Object Repository/Page_PeeBu/span_Entity_k-icon k-i-filter | Object Repository/Page_PeeBu/input_Contains_k-textbox FilterInput Entity | Hilll Group  |
      #| type                                                       | Object Repository/Page_PeeBu/input_Contains_k-textbox ng-untouched ng-pr_bd07bf | withdrawal   |

  #Scenario: Check that created date is filterable
  #  When I click "createdDateColumnId" column filter
  #  And I select a "startDate" to filter
  #  And I select a "endDate" to filter
    #And I click filter button
    #Then I see only filtered transactions

  #Scenario: Check that amount is filterable
    #When I click "amountColumnId" column filter
    #And I write a "biggerThanNumber" to filter
    #And I write a "lessThanNumber" to filter
    #And I click filter button
    #Then I see only filtered transactions
