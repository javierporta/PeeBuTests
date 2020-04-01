Feature: Check transaction page detail
  As a user 
  I want to access to details of a transaction
  So that I can see transaction details

  Scenario: Check title of the page is present
    Given I have the browser open
    When I navigate to the URL
    Then I verify that the header "Transaction #" is present

  Scenario Outline: Check elements are present
    Given I have the browser open
    When I navigate to the URL
    Then I verify that the element <objectId> is present

    Examples: 
      | objectId           |
      | transactionLabelId |
      | transactionFieldId |
      | createdDateLabelId |
      | createdDateFieldId |
      | entityLabelId      |
      | entityFieldId      |
      | amountLabelId      |
      | amountFieldId      |
      | typeLabelId        |
      | typeFieldId        |
      | sourceLabelId      |
      | sourceFieldId      |
