$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CreateFunctions.feature");
formatter.feature({
  "line": 2,
  "name": "Computer database",
  "description": "As a user I want to be able to perform CRUD actions on the computer database",
  "id": "computer-database",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create new computer",
  "description": "As a user I want to be able to create a new computer",
  "id": "computer-database;create-new-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add a new computer",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 10
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cIntroduced-Date\u003e",
        "\u003cDiscontinued-Date\u003e",
        "\u003cCompany\u003e"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can see the computer in the list",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 13
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cIntroduced-Date\u003e",
        "\u003cDiscontinued-Date\u003e",
        "\u003cCompany\u003e"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I delete the computer \u0027\u003cComputer-Name\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "computer-database;create-new-computer;",
  "rows": [
    {
      "cells": [
        "Test Case Id",
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 17,
      "id": "computer-database;create-new-computer;;1"
    },
    {
      "cells": [
        "I1",
        "Test Computer A",
        "2021-01-04",
        "2021-01-05",
        "IBM"
      ],
      "line": 18,
      "id": "computer-database;create-new-computer;;2"
    },
    {
      "cells": [
        "I2",
        "Test Computer1",
        "2016-02-29",
        "",
        "Netronics"
      ],
      "line": 19,
      "id": "computer-database;create-new-computer;;3"
    },
    {
      "cells": [
        "I3",
        "1234567890",
        "",
        "2021-01-05",
        "IBM"
      ],
      "line": 20,
      "id": "computer-database;create-new-computer;;4"
    },
    {
      "cells": [
        "I4",
        "Test Computer3!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
        "",
        "",
        "Apple Inc."
      ],
      "line": 21,
      "id": "computer-database;create-new-computer;;5"
    },
    {
      "cells": [
        "I5",
        "ABCDEFHGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr",
        "2016-02-29",
        "2021-01-05",
        "IBM"
      ],
      "line": 22,
      "id": "computer-database;create-new-computer;;6"
    },
    {
      "cells": [
        "I6",
        "1234567890",
        "",
        "",
        "IBM"
      ],
      "line": 23,
      "id": "computer-database;create-new-computer;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6449851600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create new computer",
  "description": "As a user I want to be able to create a new computer",
  "id": "computer-database;create-new-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 10
    },
    {
      "cells": [
        "Test Computer A",
        "2021-01-04",
        "2021-01-05",
        "IBM"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can see the computer in the list",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 13
    },
    {
      "cells": [
        "Test Computer A",
        "2021-01-04",
        "2021-01-05",
        "IBM"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I delete the computer \u0027Test Computer A\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 168248500,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 894547800,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_can_see_the_computer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 606441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Computer A",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 861579100,
  "status": "passed"
});
formatter.after({
  "duration": 41050400,
  "status": "passed"
});
formatter.before({
  "duration": 5796728100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create new computer",
  "description": "As a user I want to be able to create a new computer",
  "id": "computer-database;create-new-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 10
    },
    {
      "cells": [
        "Test Computer1",
        "2016-02-29",
        "",
        "Netronics"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can see the computer in the list",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 13
    },
    {
      "cells": [
        "Test Computer1",
        "2016-02-29",
        "",
        "Netronics"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I delete the computer \u0027Test Computer1\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 31432300,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 890552300,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_can_see_the_computer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 548200500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Computer1",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 845215000,
  "status": "passed"
});
formatter.after({
  "duration": 46595200,
  "status": "passed"
});
formatter.before({
  "duration": 5862021800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create new computer",
  "description": "As a user I want to be able to create a new computer",
  "id": "computer-database;create-new-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 10
    },
    {
      "cells": [
        "1234567890",
        "",
        "2021-01-05",
        "IBM"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can see the computer in the list",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 13
    },
    {
      "cells": [
        "1234567890",
        "",
        "2021-01-05",
        "IBM"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I delete the computer \u00271234567890\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 42466800,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 995879800,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_can_see_the_computer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 604275800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 984937400,
  "status": "passed"
});
formatter.after({
  "duration": 53745400,
  "status": "passed"
});
formatter.before({
  "duration": 6010934200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create new computer",
  "description": "As a user I want to be able to create a new computer",
  "id": "computer-database;create-new-computer;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 10
    },
    {
      "cells": [
        "Test Computer3!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
        "",
        "",
        "Apple Inc."
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can see the computer in the list",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 13
    },
    {
      "cells": [
        "Test Computer3!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
        "",
        "",
        "Apple Inc."
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I delete the computer \u0027Test Computer3!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 63734200,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 1281173800,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_can_see_the_computer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 10547864900,
  "error_message": "java.lang.AssertionError: No items in the table to check\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat actions.FirstPageHelper.CheckTableValues(FirstPageHelper.java:48)\r\n\tat pages.FirstScreen.CheckTableContents(FirstScreen.java:33)\r\n\tat stepdefs.FirstScreenStepDefs.i_can_see_the_computer_in_the_list(FirstScreenStepDefs.java:76)\r\n\tat ✽.Then I can see the computer in the list(features/CreateFunctions.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Computer3!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42093200,
  "status": "passed"
});
formatter.before({
  "duration": 5843957700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Create new computer",
  "description": "As a user I want to be able to create a new computer",
  "id": "computer-database;create-new-computer;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 10
    },
    {
      "cells": [
        "ABCDEFHGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr",
        "2016-02-29",
        "2021-01-05",
        "IBM"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can see the computer in the list",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 13
    },
    {
      "cells": [
        "ABCDEFHGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr",
        "2016-02-29",
        "2021-01-05",
        "IBM"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I delete the computer \u0027ABCDEFHGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 26248700,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 931854200,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_can_see_the_computer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 534104600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCDEFHGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqr",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 814925100,
  "status": "passed"
});
formatter.after({
  "duration": 46671800,
  "status": "passed"
});
formatter.before({
  "duration": 5840513300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Create new computer",
  "description": "As a user I want to be able to create a new computer",
  "id": "computer-database;create-new-computer;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 10
    },
    {
      "cells": [
        "1234567890",
        "",
        "",
        "IBM"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can see the computer in the list",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 13
    },
    {
      "cells": [
        "1234567890",
        "",
        "",
        "IBM"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I delete the computer \u00271234567890\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 37498200,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 921403400,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_can_see_the_computer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 594955300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 1003813800,
  "status": "passed"
});
formatter.after({
  "duration": 77536200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cIntroduced-Date\u003e",
        "\u003cDiscontinued-Date\u003e",
        "\u003cCompany\u003e"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027\u003cError\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "computer-database;create-new-computer-negative-scenarios;",
  "rows": [
    {
      "cells": [
        "Test Case Id",
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company",
        "Error"
      ],
      "line": 34,
      "id": "computer-database;create-new-computer-negative-scenarios;;1"
    },
    {
      "cells": [
        "I8",
        "Test Computer",
        "2021-01-00",
        "",
        "IBM",
        "Introduced date"
      ],
      "line": 35,
      "id": "computer-database;create-new-computer-negative-scenarios;;2"
    },
    {
      "cells": [
        "I9",
        "Test Computer1",
        "",
        "2021-02-00",
        "IBM",
        "Discontinued date"
      ],
      "line": 36,
      "id": "computer-database;create-new-computer-negative-scenarios;;3"
    },
    {
      "cells": [
        "I10",
        "1234567890",
        "2021-03-40",
        "",
        "IBM",
        "Introduced date"
      ],
      "line": 37,
      "id": "computer-database;create-new-computer-negative-scenarios;;4"
    },
    {
      "cells": [
        "I11",
        "1234567890",
        "",
        "2021-04-40",
        "IBM",
        "Discontinued date"
      ],
      "line": 38,
      "id": "computer-database;create-new-computer-negative-scenarios;;5"
    },
    {
      "cells": [
        "I12",
        "!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
        "0000-01-15",
        "",
        "IBM",
        "Introduced date"
      ],
      "line": 39,
      "id": "computer-database;create-new-computer-negative-scenarios;;6"
    },
    {
      "cells": [
        "I13",
        "!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
        "",
        "0000-02-15",
        "IBM",
        "Discontinued date"
      ],
      "line": 40,
      "id": "computer-database;create-new-computer-negative-scenarios;;7"
    },
    {
      "cells": [
        "I14",
        "Test Computer 1",
        "AAAA-BB-CC",
        "",
        "IBM",
        "Introduced date"
      ],
      "line": 41,
      "id": "computer-database;create-new-computer-negative-scenarios;;8"
    },
    {
      "cells": [
        "I15",
        "Test Computer 1",
        "",
        "AAAA-BB-CC",
        "IBM",
        "Discontinued date"
      ],
      "line": 42,
      "id": "computer-database;create-new-computer-negative-scenarios;;9"
    },
    {
      "cells": [
        "I16",
        "",
        "2021-01-04",
        "2021-02-04",
        "IBM",
        "Computer name"
      ],
      "line": 43,
      "id": "computer-database;create-new-computer-negative-scenarios;;10"
    },
    {
      "cells": [
        "I17",
        "",
        "",
        "",
        "",
        "Computer name"
      ],
      "line": 44,
      "id": "computer-database;create-new-computer-negative-scenarios;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6120763700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "Test Computer",
        "2021-01-00",
        "",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 52632600,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 1042995600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 56219100,
  "status": "passed"
});
formatter.after({
  "duration": 61983500,
  "status": "passed"
});
formatter.before({
  "duration": 6110077900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "Test Computer1",
        "",
        "2021-02-00",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 48335600,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 887798900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 41366900,
  "status": "passed"
});
formatter.after({
  "duration": 65237000,
  "status": "passed"
});
formatter.before({
  "duration": 5901359900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "1234567890",
        "2021-03-40",
        "",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 49763700,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 855138700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 43226800,
  "status": "passed"
});
formatter.after({
  "duration": 46820400,
  "status": "passed"
});
formatter.before({
  "duration": 5983288100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "1234567890",
        "",
        "2021-04-40",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 32578500,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 802948700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 28657500,
  "status": "passed"
});
formatter.after({
  "duration": 43917500,
  "status": "passed"
});
formatter.before({
  "duration": 5800596500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
        "0000-01-15",
        "",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 37289700,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 985495400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 10144437400,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefs.FirstScreenStepDefs.the_block_is_highlighted(FirstScreenStepDefs.java:58)\r\n\tat ✽.Then the block is highlighted caused by the \u0027Introduced date\u0027(features/CreateFunctions.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 39951700,
  "status": "passed"
});
formatter.before({
  "duration": 5917730200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "!\"£$%^\u0026*()_+\u003d-{}][~@:;\u0027#?\u003e\u003c,./\\",
        "",
        "0000-02-15",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 30504700,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 900308600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 10029371400,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefs.FirstScreenStepDefs.the_block_is_highlighted(FirstScreenStepDefs.java:58)\r\n\tat ✽.Then the block is highlighted caused by the \u0027Discontinued date\u0027(features/CreateFunctions.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 31297300,
  "status": "passed"
});
formatter.before({
  "duration": 5927622600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "Test Computer 1",
        "AAAA-BB-CC",
        "",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 37909200,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 795911000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 49234000,
  "status": "passed"
});
formatter.after({
  "duration": 48104400,
  "status": "passed"
});
formatter.before({
  "duration": 5862234600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "Test Computer 1",
        "",
        "AAAA-BB-CC",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 32232300,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 787371500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 34697400,
  "status": "passed"
});
formatter.after({
  "duration": 37965600,
  "status": "passed"
});
formatter.before({
  "duration": 5832855700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "",
        "2021-01-04",
        "2021-02-04",
        "IBM"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Computer name\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 40208900,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 914317800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer name",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 40906800,
  "status": "passed"
});
formatter.after({
  "duration": 71345500,
  "status": "passed"
});
formatter.before({
  "duration": 6565430500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Create new computer negative scenarios",
  "description": "As a user I want to be unable to create a new computer with invalid inputs",
  "id": "computer-database;create-new-computer-negative-scenarios;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 30
    },
    {
      "cells": [
        "",
        "",
        "",
        ""
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the block is highlighted caused by the \u0027Computer name\u0027",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 52352700,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 875116900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer name",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 36391500,
  "status": "passed"
});
formatter.after({
  "duration": 41902300,
  "status": "passed"
});
formatter.uri("features/DeleteFunctions.feature");
formatter.feature({
  "line": 2,
  "name": "Delete Computer from Computer database",
  "description": "As a user I want to be able to perform CRUD actions on the computer database",
  "id": "delete-computer-from-computer-database",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Delete Test Computers",
  "description": "As a user I want to be able to delete computers",
  "id": "delete-computer-from-computer-database;delete-test-computers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add a new computer",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cIntroduced-Date\u003e",
        "\u003cDiscontinued-Date\u003e",
        "\u003cCompany\u003e"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I delete the computer \u0027\u003cComputer-Name\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I check the computer has been removed from the database",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Result"
      ],
      "line": 13
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cResult\u003e"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "delete-computer-from-computer-database;delete-test-computers;",
  "rows": [
    {
      "cells": [
        "Test Case Id",
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company",
        "Result"
      ],
      "line": 16,
      "id": "delete-computer-from-computer-database;delete-test-computers;;1"
    },
    {
      "cells": [
        "D1",
        "Test Computer delete",
        "2020-01-20",
        "",
        "IBM",
        "Nothing to display"
      ],
      "line": 17,
      "id": "delete-computer-from-computer-database;delete-test-computers;;2"
    },
    {
      "cells": [
        "D2",
        "Test Computer 99",
        "2020-01-21",
        "2020-01-22",
        "ARRA",
        "Nothing to display"
      ],
      "line": 18,
      "id": "delete-computer-from-computer-database;delete-test-computers;;3"
    },
    {
      "cells": [
        "D3",
        "987654321",
        "",
        "",
        "Amiga 3000UX",
        "Nothing to display"
      ],
      "line": 19,
      "id": "delete-computer-from-computer-database;delete-test-computers;;4"
    },
    {
      "cells": [
        "D4",
        "Test Computer !\"£$%",
        "",
        "2020-01-23",
        "BINAC",
        "Nothing to display"
      ],
      "line": 20,
      "id": "delete-computer-from-computer-database;delete-test-computers;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6102904700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Delete Test Computers",
  "description": "As a user I want to be able to delete computers",
  "id": "delete-computer-from-computer-database;delete-test-computers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "Test Computer delete",
        "2020-01-20",
        "",
        "IBM"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I delete the computer \u0027Test Computer delete\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I check the computer has been removed from the database",
  "matchedColumns": [
    1,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Result"
      ],
      "line": 13
    },
    {
      "cells": [
        "Test Computer delete",
        "Nothing to display"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 37158400,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 919358700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Computer delete",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 1120541600,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.the_computer_is_no_longer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 589537200,
  "status": "passed"
});
formatter.after({
  "duration": 82481700,
  "status": "passed"
});
formatter.before({
  "duration": 6030102900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Delete Test Computers",
  "description": "As a user I want to be able to delete computers",
  "id": "delete-computer-from-computer-database;delete-test-computers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "Test Computer 99",
        "2020-01-21",
        "2020-01-22",
        "ARRA"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I delete the computer \u0027Test Computer 99\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I check the computer has been removed from the database",
  "matchedColumns": [
    1,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Result"
      ],
      "line": 13
    },
    {
      "cells": [
        "Test Computer 99",
        "Nothing to display"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 36247100,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 941961800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Computer 99",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 966857900,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.the_computer_is_no_longer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 468744400,
  "status": "passed"
});
formatter.after({
  "duration": 41323900,
  "status": "passed"
});
formatter.before({
  "duration": 5883571800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Delete Test Computers",
  "description": "As a user I want to be able to delete computers",
  "id": "delete-computer-from-computer-database;delete-test-computers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "987654321",
        "",
        "",
        "Amiga 3000UX"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I delete the computer \u0027987654321\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I check the computer has been removed from the database",
  "matchedColumns": [
    1,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Result"
      ],
      "line": 13
    },
    {
      "cells": [
        "987654321",
        "Nothing to display"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 35685400,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 901161000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987654321",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 943153500,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.the_computer_is_no_longer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 403216500,
  "status": "passed"
});
formatter.after({
  "duration": 47962600,
  "status": "passed"
});
formatter.before({
  "duration": 5916633100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Delete Test Computers",
  "description": "As a user I want to be able to delete computers",
  "id": "delete-computer-from-computer-database;delete-test-computers;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add a new computer",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Introduced-Date",
        "Discontinued-Date",
        "Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "Test Computer !\"£$%",
        "",
        "2020-01-23",
        "BINAC"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I delete the computer \u0027Test Computer !\"£$%\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I check the computer has been removed from the database",
  "matchedColumns": [
    1,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Result"
      ],
      "line": 13
    },
    {
      "cells": [
        "Test Computer !\"£$%",
        "Nothing to display"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 31393000,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_add_a_new_computer(DataTable)"
});
formatter.result({
  "duration": 929308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Computer !\"£$%",
      "offset": 23
    }
  ],
  "location": "DeleteStepDefs.i_delete_the_computer(String)"
});
formatter.result({
  "duration": 879713600,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.the_computer_is_no_longer_in_the_list(DataTable)"
});
formatter.result({
  "duration": 432437700,
  "status": "passed"
});
formatter.after({
  "duration": 40096100,
  "status": "passed"
});
formatter.uri("features/EditFunctions.feature");
formatter.feature({
  "line": 2,
  "name": "Load and edit an entry but do not commit changes",
  "description": "As a user I want to be able to perform CRUD actions on the computer database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": ": Cancel deletion of computer",
  "description": "As a user I want to be able to edit an entry on the database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I edit an existing entry",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cEdit-Computer-Name\u003e",
        "\u003cEdit-Introduced-Date\u003e",
        "\u003cEdit-Discontinued-Date\u003e",
        "\u003cEdit-Company\u003e"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I check the entry has been updated",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cEdit-Computer-Name\u003e",
        "\u003cEdit-Introduced-Date\u003e",
        "\u003cEdit-Discontinued-Date\u003e",
        "\u003cEdit-Company\u003e"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;",
  "rows": [
    {
      "cells": [
        "TestId",
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 15,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;1"
    },
    {
      "cells": [
        "E1",
        "ASCI Blue Mountain",
        "ASCI Blue Mountain1",
        "2021-02-05",
        "2021-02-15",
        "NeXT"
      ],
      "line": 16,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;2"
    },
    {
      "cells": [
        "E2",
        "Amiga 2000 Model A",
        "Amiga 2000 Model A",
        "",
        "",
        "Commodore International"
      ],
      "line": 17,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;3"
    },
    {
      "cells": [
        "E3",
        "Analytical engine",
        "Analytical engine1",
        "",
        "2020-01-15",
        "Micro Instrumentation and Telemetry Systems"
      ],
      "line": 18,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;4"
    },
    {
      "cells": [
        "E4",
        "Apple PenLite",
        "Apple PenLite",
        "2016-03-15",
        "",
        "Apple Inc."
      ],
      "line": 19,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5876923800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": Cancel deletion of computer",
  "description": "As a user I want to be able to edit an entry on the database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "ASCI Blue Mountain",
        "ASCI Blue Mountain1",
        "2021-02-05",
        "2021-02-15",
        "NeXT"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I check the entry has been updated",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "ASCI Blue Mountain",
        "ASCI Blue Mountain1",
        "2021-02-05",
        "2021-02-15",
        "NeXT"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 45924600,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1616105400,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_check_the_entry_has_been_updated(DataTable)"
});
formatter.result({
  "duration": 1071545000,
  "status": "passed"
});
formatter.after({
  "duration": 51094100,
  "status": "passed"
});
formatter.before({
  "duration": 5831011400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": ": Cancel deletion of computer",
  "description": "As a user I want to be able to edit an entry on the database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "Amiga 2000 Model A",
        "Amiga 2000 Model A",
        "",
        "",
        "Commodore International"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I check the entry has been updated",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "Amiga 2000 Model A",
        "Amiga 2000 Model A",
        "",
        "",
        "Commodore International"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 26193300,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1287070200,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_check_the_entry_has_been_updated(DataTable)"
});
formatter.result({
  "duration": 867859700,
  "status": "passed"
});
formatter.after({
  "duration": 30476800,
  "status": "passed"
});
formatter.before({
  "duration": 5815846100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Cancel deletion of computer",
  "description": "As a user I want to be able to edit an entry on the database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "Analytical engine",
        "Analytical engine1",
        "",
        "2020-01-15",
        "Micro Instrumentation and Telemetry Systems"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I check the entry has been updated",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "Analytical engine",
        "Analytical engine1",
        "",
        "2020-01-15",
        "Micro Instrumentation and Telemetry Systems"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 28998900,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1418140000,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_check_the_entry_has_been_updated(DataTable)"
});
formatter.result({
  "duration": 910932600,
  "status": "passed"
});
formatter.after({
  "duration": 44793300,
  "status": "passed"
});
formatter.before({
  "duration": 5759476300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Cancel deletion of computer",
  "description": "As a user I want to be able to edit an entry on the database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;:-cancel-deletion-of-computer;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 9
    },
    {
      "cells": [
        "Apple PenLite",
        "Apple PenLite",
        "2016-03-15",
        "",
        "Apple Inc."
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I check the entry has been updated",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "Apple PenLite",
        "Apple PenLite",
        "2016-03-15",
        "",
        "Apple Inc."
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 25790900,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1369617600,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_check_the_entry_has_been_updated(DataTable)"
});
formatter.result({
  "duration": 908331200,
  "status": "passed"
});
formatter.after({
  "duration": 44321200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "\u003cComputer-Name\u003e",
        "\u003cEdit-Computer-Name\u003e",
        "\u003cEdit-Introduced-Date\u003e",
        "\u003cEdit-Discontinued-Date\u003e",
        "\u003cEdit-Company\u003e"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027\u003cError\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;",
  "rows": [
    {
      "cells": [
        "TestId",
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company",
        "Error"
      ],
      "line": 30,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;1"
    },
    {
      "cells": [
        "E5",
        "ASCI Blue Mountain",
        "",
        "2021-02-05",
        "",
        "NeXT",
        "Computer name"
      ],
      "line": 31,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;2"
    },
    {
      "cells": [
        "E6",
        "Amiga 2000 Model A",
        "Amiga 2000 Model A",
        "2020-01-00",
        "",
        "Commodore International",
        "Introduced date"
      ],
      "line": 32,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;3"
    },
    {
      "cells": [
        "E7",
        "Analytical engine",
        "Analytical engine1",
        "",
        "2020-01-00",
        "Micro Instrumentation and Telemetry Systems",
        "Discontinued date"
      ],
      "line": 33,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;4"
    },
    {
      "cells": [
        "E8",
        "Apple PenLite",
        "Apple PenLite",
        "2016-03-40",
        "",
        "Apple Inc.",
        "Introduced date"
      ],
      "line": 34,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;5"
    },
    {
      "cells": [
        "E9",
        "ASCI Blue Pacific",
        "ASCI Blue Pacific",
        "",
        "2016-03-40",
        "Apple Inc.",
        "Discontinued date"
      ],
      "line": 35,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;6"
    },
    {
      "cells": [
        "E10",
        "Acer Extensa",
        "Acer Extensa",
        "0000-03-15",
        "",
        "Apple Inc.",
        "Introduced date"
      ],
      "line": 36,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;7"
    },
    {
      "cells": [
        "E11",
        "Acorn System 2",
        "Amiga 1000",
        "",
        "0000-03-15",
        "Apple Inc.",
        "Discontinued date"
      ],
      "line": 37,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;8"
    },
    {
      "cells": [
        "E12",
        "Amiga 3000UX",
        "Amiga 3000UX",
        "AAaa-Bb-Cc",
        "",
        "Apple Inc.",
        "Introduced date"
      ],
      "line": 38,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;9"
    },
    {
      "cells": [
        "E13",
        "Amstrad CPC",
        "Amstrad CPC",
        "",
        "AAaa-Bb-Cc",
        "Apple Inc.",
        "Discontinued date"
      ],
      "line": 39,
      "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5796951100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "ASCI Blue Mountain",
        "",
        "2021-02-05",
        "",
        "NeXT"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Computer name\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 45808100,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1400032200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer name",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 35906800,
  "status": "passed"
});
formatter.after({
  "duration": 48162600,
  "status": "passed"
});
formatter.before({
  "duration": 5846573600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "Amiga 2000 Model A",
        "Amiga 2000 Model A",
        "2020-01-00",
        "",
        "Commodore International"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 28530200,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1231745200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 33345500,
  "status": "passed"
});
formatter.after({
  "duration": 45484000,
  "status": "passed"
});
formatter.before({
  "duration": 5806243099,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "Analytical engine",
        "Analytical engine1",
        "",
        "2020-01-00",
        "Micro Instrumentation and Telemetry Systems"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 30699901,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1213363000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 40157200,
  "status": "passed"
});
formatter.after({
  "duration": 33567900,
  "status": "passed"
});
formatter.before({
  "duration": 5760927600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "Apple PenLite",
        "Apple PenLite",
        "2016-03-40",
        "",
        "Apple Inc."
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 40014100,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1368912899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 39042501,
  "status": "passed"
});
formatter.after({
  "duration": 40594200,
  "status": "passed"
});
formatter.before({
  "duration": 5774396100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "ASCI Blue Pacific",
        "ASCI Blue Pacific",
        "",
        "2016-03-40",
        "Apple Inc."
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 26117400,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1154211501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 53139000,
  "status": "passed"
});
formatter.after({
  "duration": 43097500,
  "status": "passed"
});
formatter.before({
  "duration": 5851355401,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "Acer Extensa",
        "Acer Extensa",
        "0000-03-15",
        "",
        "Apple Inc."
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 31091101,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1343860600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 10057727701,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefs.FirstScreenStepDefs.the_block_is_highlighted(FirstScreenStepDefs.java:58)\r\n\tat ✽.Then the block is highlighted caused by the \u0027Introduced date\u0027(features/EditFunctions.feature:28)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 30640400,
  "status": "passed"
});
formatter.before({
  "duration": 5760807300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "Acorn System 2",
        "Amiga 1000",
        "",
        "0000-03-15",
        "Apple Inc."
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 29565501,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 20484324300,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-PDRP7FP\u0027, ip: \u0027192.168.0.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Nick\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:53901}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 94d13010da84eabc9b5557dd9500699f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepdefs.EditStepDefs.i_edit_an_existing_entry(EditStepDefs.java:45)\r\n\tat ✽.When I edit an existing entry(features/EditFunctions.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 44116699,
  "status": "passed"
});
formatter.before({
  "duration": 6190529401,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "Amiga 3000UX",
        "Amiga 3000UX",
        "AAaa-Bb-Cc",
        "",
        "Apple Inc."
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Introduced date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 25773501,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1284659100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Introduced date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 34942700,
  "status": "passed"
});
formatter.after({
  "duration": 34036200,
  "status": "passed"
});
formatter.before({
  "duration": 5763979600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Invoke warnings on save for edits",
  "description": "As a user I want to be able to edit an entry on the database but disabled from entering invalid inputs",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;invoke-warnings-on-save-for-edits;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I edit an existing entry",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "rows": [
    {
      "cells": [
        "Computer-Name",
        "Edit-Computer-Name",
        "Edit-Introduced-Date",
        "Edit-Discontinued-Date",
        "Edit-Company"
      ],
      "line": 26
    },
    {
      "cells": [
        "Amstrad CPC",
        "Amstrad CPC",
        "",
        "AAaa-Bb-Cc",
        "Apple Inc."
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the block is highlighted caused by the \u0027Discontinued date\u0027",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 28118600,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefs.i_edit_an_existing_entry(DataTable)"
});
formatter.result({
  "duration": 1183825300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discontinued date",
      "offset": 40
    }
  ],
  "location": "FirstScreenStepDefs.the_block_is_highlighted(String)"
});
formatter.result({
  "duration": 30524800,
  "status": "passed"
});
formatter.after({
  "duration": 37463100,
  "status": "passed"
});
formatter.uri("features/ReadFunction.feature");
formatter.feature({
  "line": 2,
  "name": "Load and edit an entry but do not commit changes",
  "description": "As a user I want to be able to perform CRUD actions on the computer database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 5763838100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "View contents of table pages",
  "description": "As a user I want to be able to cancel from the deletion of a computer",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes;view-contents-of-table-pages",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the computer database is open",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click the next button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I check the table view",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click the previous button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I check the table view",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstScreenStepDefs.the_database_is_open()"
});
formatter.result({
  "duration": 35533400,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_click_the_next_button()"
});
formatter.result({
  "duration": 226916500,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_check_the_table_view()"
});
formatter.result({
  "duration": 40501600,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_click_the_previous_button()"
});
formatter.result({
  "duration": 228438100,
  "status": "passed"
});
formatter.match({
  "location": "FirstScreenStepDefs.i_check_the_table_view()"
});
formatter.result({
  "duration": 28255200,
  "status": "passed"
});
formatter.after({
  "duration": 33657400,
  "status": "passed"
});
});