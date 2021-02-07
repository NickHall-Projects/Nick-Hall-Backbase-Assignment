@Regression
Feature: Delete Computer from Computer database
  As a user I want to be able to perform CRUD actions on the computer database

  Scenario Outline: Delete Test Computers
  As a user I want to be able to delete computers
    Given the computer database is open
    When I add a new computer
      | Computer-Name   | Introduced-Date   | Discontinued-Date   | Company   |
      | <Computer-Name> | <Introduced-Date> | <Discontinued-Date> | <Company> |
    Then I delete the computer '<Computer-Name>'
    And I check the computer has been removed from the database
      | Computer-Name   | Result   |
      | <Computer-Name> | <Result> |
    Examples:
      | Test Case Id | Computer-Name        | Introduced-Date | Discontinued-Date | Company      | Result             |
      | D1           | Test Computer delete | 2020-01-20      |                   | IBM          | Nothing to display |
      | D2           | Test Computer 99     | 2020-01-21      | 2020-01-22        | ARRA         | Nothing to display |
      | D3           | 987654321            |                 |                   | Amiga 3000UX | Nothing to display |
      | D4           | Test Computer !"£$%  |                 | 2020-01-23        | BINAC        | Nothing to display |