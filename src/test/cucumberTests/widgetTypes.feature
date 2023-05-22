Feature: Check new widget types

Background: Open project
Given I open login page
And I log in with the ADMINUSERNAME and ADMINPASSWORD credentials
And I open the project "automated_testing_global_mentoring_program"

Scenario: Check new widget types
Given I select the dashboard named "DEMO DASHBOARD"
When I click the add new widget button
Then I should see the following widget types:
| Launch statistics chart |
| Overall statistics |
| Launches duration chart |
| Launch execution and issue statistic |
| Project activity panel |
| Test-cases growth trend chart |
| Investigated percentage of launches |
| Launches table |
| Unique bugs table |
| Most failed test-cases table (TOP-20) |
| Failed cases trend chart |
| Non-passed test-cases trend chart |
| Different launches comparison chart |
| Passing rate per launch |
| Passing rate summary |
| Flaky test cases table (TOP-20) |
| Cumulative trend chart |
| Most popular pattern table (TOP-20) |
| Component health check |
| Component health check (table view) |
| Most time-consuming test cases widget (TOP-20) |