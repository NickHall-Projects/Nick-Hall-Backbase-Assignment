# Nick Hall Back Base Testing Project
---
### This project has been written and tested using Chrome. It uses the following tools;
  - Java
  - Selenium Webdriver
  - Cucumber
  - Pico Contianer for dependency injection
  - Maven
  - Junit

# Execution
>This framework has been written using the Chrome browser, although it does include the MS Edge driver, but has not been tested. The browser to use can be specified from the command libe using Maven, or if executed via the RunTest class, the default browser is Chrome as specified in the following menu. **Run->Edit Configuration->Environment Variable**

Tests can be executed by:
1. Clicking run on the RunTests class
2. Run using Maven from the command line
3. The framework can take runtime parameters from Maven using the following command  
3.1 mvn test -DbrowserName=Chrome  
3.1.1 The framework  