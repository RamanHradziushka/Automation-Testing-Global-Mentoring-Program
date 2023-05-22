Feature: Check statistics items in the widget Dashboard page

Background: Open project
Given I open login page
And I log in with the ADMINUSERNAME and ADMINPASSWORD credentials
And I open the project "automated_testing_global_mentoring_program"

Scenario: Check statistics items in the widget Dashboard page
When I select the dashboard named "DEMO DASHBOARD"
Then I should see the following statistics items:
| Total |
| Passed |
| Failed |
| Skipped |
| Product Bug |
| Automation Bug |
| System Issue |
| To Investigate |