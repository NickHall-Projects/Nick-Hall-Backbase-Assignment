@wip
Feature: Load and edit an entry but do not commit changes
  As a user I want to be able to perform CRUD actions on the computer database

  Scenario Outline: : Cancel deletion of computer
  As a user I want to be able to edit an entry on the database
    Given the computer database is open
    When I edit an existing entry
      | Computer-Name   | Edit-Computer-Name   | Edit-Introduced-Date   | Edit-Discontinued-Date   | Edit-Company   |
      | <Computer-Name> | <Edit-Computer-Name> | <Edit-Introduced-Date> | <Edit-Discontinued-Date> | <Edit-Company> |
    Then I check the entry has been updated
      | Computer-Name   | Edit-Computer-Name   | Edit-Introduced-Date   | Edit-Discontinued-Date   | Edit-Company   |
      | <Computer-Name> | <Edit-Computer-Name> | <Edit-Introduced-Date> | <Edit-Discontinued-Date> | <Edit-Company> |
    Examples:
      | TestId | Computer-Name      | Edit-Computer-Name  | Edit-Introduced-Date | Edit-Discontinued-Date | Edit-Company                                |
      | E1     | ASCI Blue Mountain | ASCI Blue Mountain1 | 2021-02-05           | 2021-02-15             | NeXT                                        |
      | E2     | Amiga 2000 Model A | Amiga 2000 Model A  |                      |                        | Commodore International                     |
      | E3     | Analytical engine  | Analytical engine1  |                      | 2020-01-15             | Micro Instrumentation and Telemetry Systems |
      | E4     | Apple PenLite      | Apple PenLite       | 2016-03-15           |                        | Apple Inc.                                  |


  Scenario Outline: Invoke warnings on save for edits
  As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs
    Given the computer database is open
    When I edit an existing entry
      | Computer-Name   | Edit-Computer-Name   | Edit-Introduced-Date   | Edit-Discontinued-Date   | Edit-Company   |
      | <Computer-Name> | <Edit-Computer-Name> | <Edit-Introduced-Date> | <Edit-Discontinued-Date> | <Edit-Company> |
    Then the block is highlighted caused by the '<Error>'
    Examples:
      | TestId | Computer-Name      | Edit-Computer-Name | Edit-Introduced-Date | Edit-Discontinued-Date | Edit-Company                                | Error             |
      | E5     | ASCI Blue Mountain |                    | 2021-02-05           |                        | NeXT                                        | Computer name     |
      | E6     | Amiga 2000 Model A | Amiga 2000 Model A | 2020-01-00           |                        | Commodore International                     | Introduced date   |
      | E7     | Analytical engine  | Analytical engine1 |                      | 2020-01-00             | Micro Instrumentation and Telemetry Systems | Discontinued date |
      | E8     | Apple PenLite      | Apple PenLite      | 2016-03-40           |                        | Apple Inc.                                  | Introduced date   |
      | E9     | ASCI Blue Pacific  | ASCI Blue Pacific  |                      | 2016-03-40             | Apple Inc.                                  | Discontinued date |
      | E10    | Acer Extensa       | Acer Extensa       | 0000-03-15           |                        | Apple Inc.                                  | Introduced date   |
      | E11    | Acorn System 2     | Amiga 1000         |                      | 0000-03-15             | Apple Inc.                                  | Discontinued date |
      | E12    | Amiga 3000UX       | Amiga 3000UX       | AAaa-Bb-Cc           |                        | Apple Inc.                                  | Introduced date   |
      | E13    | Amstrad CPC        | Amstrad CPC        |                      | AAaa-Bb-Cc             | Apple Inc.                                  | Discontinued date |