Feature: Check widget description update

Background: Open project
Given I open login page
And I log in with the ADMINUSERNAME and ADMINPASSWORD credentials
And I open the project "automated_testing_global_mentoring_program"

Rule: Widget description must be editable

Scenario Outline: Check widget description update
Given I select the dashboard named "<dashboard_name>"
And I click the edit dashboard button
And I fill in the description with "New Check apply widget names description"
And I click the update button
When I click the edit dashboard button
Then I should see the description "New Check apply widget names description"
And I fill in the description with "Old Check apply widget names description"
And I click the update button

Examples:
| dashboard_name |
| DEMO DASHBOARD |
