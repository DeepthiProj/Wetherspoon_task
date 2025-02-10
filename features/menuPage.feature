Feature: Landing on Menu page

  Scenario: As a user, I can navigate from the landing page to table selection page
    Given I am on the landing page
    When I select the Terms & Conditions and Privacy Policy radio buttons
    Then I see the Continue button is enabled
    When I click on the button
    Then I will be navigated to the table selection page

  Scenario: Validating  'Browse The Menu' button
    When I clcik on the Browse the menu button
    Then I should be redirected to the menu page
    When I click on back
    Then I will be navigated to the table selection page

# As per the application the range of values allowed are 1 to 91
  Scenario Outline: : Validating the table number field
    Given I enter invalid data in the <tablenumber> field
    And I click the 'Continue' button
    Then I see relavant error <message>

    Examples:
      | tablenumber | message                                      |
      |         -65 | Please check your table number and try again |
      |         6.5 | Please check your table number and try again |
      |         43. | Please check your table number and try again |
      |           0 | Please check your table number and try again |
      |          92 | Please check your table number and try again |


  Scenario: Successfully navigating to menu page
    Given I enter the table number
    Then 'Continue' button will be enabled
    When I click the 'Continue' button
    Then I should be redirected to the menu page

# There is an issue in the application where sometimes menu items list is not displaying .I have attached the screenshots in the mail
  Scenario: Successfully finding the required item
    Given I enter the search item
    Then Matching item list will be shown
