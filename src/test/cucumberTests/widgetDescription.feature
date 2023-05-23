@loginAndSelectProject
Feature: Check widget description update

Rule: Widget description must be editable

Scenario Outline: Check widget description update
Given I select the dashboard named "<dashboard_name>"
And I click the edit dashboard button
And I fill in the description with "<new_description>"
And I click the update button
When I click the edit dashboard button
Then I should see the description "<new_description>"
And I fill in the description with "<old_description>"
And I click the update button
But I open dashboards page

Examples:
| dashboard_name | old_description | new_description |
| DEMO DASHBOARD | Old Check apply widget names description | New Check apply widget names description |
| Second Dashboard for testing | | New description for the Second Dashboard |
