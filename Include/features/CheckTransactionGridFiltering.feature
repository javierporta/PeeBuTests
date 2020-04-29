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
    Then I see only filtered transactions with <textToFilter> in <firstRowColumnId>

    Examples: 
      | columnObjectId                                             | inputObjectId                                                            | textToFilter | firstRowColumnId                                  |
      | Object Repository/Page_PeeBu/span_Source_k-icon k-i-filter | Object Repository/Page_PeeBu/input_Contains_k-textbox FilterInput Source | source 10    | Object Repository/Page_PeeBu/FirstTableRow_Source |
      | Object Repository/Page_PeeBu/span_Entity_k-icon k-i-filter | Object Repository/Page_PeeBu/input_Contains_k-textbox FilterInput Entity | Hilll Group  | Object Repository/Page_PeeBu/FirstTableRow_Entity |
      | Object Repository/Page_PeeBu/span_Type_k-icon k-i-filter   | Object Repository/Page_PeeBu/input_Contains_k-textbox FilterInput Type   | withdrawal   | Object Repository/Page_PeeBu/FirstTableRow_Type   |

  Scenario Outline: Check that created date is filterable
    When I click Object Repository/Page_PeeBu/a_Created Date_k-grid-filter column filter
    And I write the startDate <startDate> to filter
    And I write the endDate <endDate> to filter
    And I click filter button
    Then I see only filtered transactions within those dates

    Examples: 
      | startDate      | endDate        |
      # Sep 2019
      | "010920190000" | "011020190000" |
      # Aug 2019
      | "010820190000" | "010920190000" |
      # Jun 2019
      | "010520190000" | "010620190000" |

  Scenario Outline: Check that amount is filterable
    When I click Object Repository/Page_PeeBu/span_Price_k-icon k-i-filter column filter
    And I write the number <amount> to filter
    And I click filter button
    Then I see only filtered transactions with this price

    Examples: 
      | amount   |
      | "269.1"  |
      | "480.42" |
      | "730.38" |

  Scenario Outline: Check that filtering by a non positive amount brings no row 
    When I click Object Repository/Page_PeeBu/span_Price_k-icon k-i-filter column filter
    And I write the number <amount> to filter
    And I click filter button
    Then I don't see any transaction

    Examples: 
      | amount |
      | "-5"   |
      | "-25"  |
      | "0"    |
