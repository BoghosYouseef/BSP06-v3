Feature: User Login

I want to Login 

Scenario: The user is now logged in

    Given I am on the "user-login" page
    When I enter "George312"
    And I enter "hsj%2*sc5$"
    And I Click the "Submit" button
    Then I should see written in a window user "George312 is now logged in!"

