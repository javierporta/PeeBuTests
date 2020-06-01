Feature: Check landing page is loaded
  As a user 
  I want to navigate to {insertMyWebURL}
  So that I can see the landing page

  Background: 
    Given I have the browser open
    When I navigate to the URL

  Scenario: Check title of the page is present
    Then I verify that the header "PeeBu" is present

  Scenario Outline: Check elements are present
    Then I verify that the element <objectId> is present

    Examples: 
      | objectId                                                  |
      | Object Repository/Page_PeeBu/h1_Home                      |
      | Object Repository/Page_PeeBu/h2_Transactions              |
      | Object Repository/Page_PeeBu/button_Show Chart            |
      | Object Repository/Page_PeeBu/footer_Polythecnic Of Leiria |

  Scenario: Check network faliure text is not present
    Then I verify that the element Object Repository/Page_PeeBu/h5_TetwokErrorText is not present

  #	Failure Testing (it will fail with this configuration, it should use other configuration (eg: using other URL in order to fail getting transactions))
  # Test cases should pass to continue with the build, it's a good practice. That is the reason why this test case is commented (but it was implemented for academic purposes). 
  #Scenario: Check network faliure text is shown when transactions API can't be reached
  #  Then I verify that the element Object Repository/Page_PeeBu/h5_TetwokErrorText is present
