@Regression
Feature: Load and edit an entry but do not commit changes
  As a user I want to be able to perform CRUD actions on the computer database

  Scenario: View contents of table pages
  As a user I want to be able to cancel from the deletion of a computer
    Given the computer database is open
    When I click the next button
    Then I check the table view
      And I click the previous button
    Then I check the table view

