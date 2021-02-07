@Regression
Feature: Computer database
  As a user I want to be able to perform CRUD actions on the computer database

  Scenario Outline: Create new computer
  As a user I want to be able to create a new computer

    Given the computer database is open
    When I add a new computer
      | Computer-Name   | Introduced-Date   | Discontinued-Date   | Company   |
      | <Computer-Name> | <Introduced-Date> | <Discontinued-Date> | <Company> |
    Then I can see the computer in the list
      | Computer-Name   | Introduced-Date   | Discontinued-Date   | Company   |
      | <Computer-Name> | <Introduced-Date> | <Discontinued-Date> | <Company> |
    And I delete the computer '<Computer-Name>'
    Examples:
      | Test Case Id | Computer-Name                                 | Introduced-Date | Discontinued-Date | Company    |
      | I1           | Test Computer A                               | 2021-01-04      | 2021-01-05        | IBM        |
      | I2           | Test Computer1                                | 2016-02-29      |                   | Netronics  |
      | I3           | 1234567890                                    |                 | 2021-01-05        | IBM        |
      | I4           | Test Computer3!"£$%^&*()_+=-{}][~@:;'#?><,./\ |                 |                   | Apple Inc. |
      | I5           | ABCDEFHGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr  | 2016-02-29      | 2021-01-05        | IBM        |
      | I6           | 1234567890                                    |                 |                   | IBM        |

  Scenario Outline: Create new computer negative scenarios
  As a user I want to be unable to create a new computer with invalid inputs

    Given the computer database is open
    When I add a new computer
      | Computer-Name   | Introduced-Date   | Discontinued-Date   | Company   |
      | <Computer-Name> | <Introduced-Date> | <Discontinued-Date> | <Company> |
    Then the block is highlighted caused by the '<Error>'
    Examples:
      | Test Case Id | Computer-Name                   | Introduced-Date | Discontinued-Date | Company | Error             |
      | I8           | Test Computer                   | 2021-01-00      |                   | IBM     | Introduced date   |
      | I9           | Test Computer1                  |                 | 2021-02-00        | IBM     | Discontinued date |
      | I10          | 1234567890                      | 2021-03-40      |                   | IBM     | Introduced date   |
      | I11          | 1234567890                      |                 | 2021-04-40        | IBM     | Discontinued date |
      | I12          | !"£$%^&*()_+=-{}][~@:;'#?><,./\ | 0000-01-15      |                   | IBM     | Introduced date   |
      | I13          | !"£$%^&*()_+=-{}][~@:;'#?><,./\ |                 | 0000-02-15        | IBM     | Discontinued date |
      | I14          | Test Computer 1                 | AAAA-BB-CC      |                   | IBM     | Introduced date   |
      | I15          | Test Computer 1                 |                 | AAAA-BB-CC        | IBM     | Discontinued date |
      | I16          |                                 | 2021-01-04      | 2021-02-04        | IBM     | Computer name     |
      | I17          |                                 |                 |                   |         | Computer name     |
