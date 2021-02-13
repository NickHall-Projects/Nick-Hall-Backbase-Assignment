$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/EditFunctions.feature");
formatter.feature({
  "line": 2,
  "name": "Load and edit an entry but do not commit changes",
  "description": "As a user I want to be able to perform CRUD actions on the computer database",
  "id": "load-and-edit-an-entry-but-do-not-commit-changes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
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
