package common;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;

public class Hooks {

    private WebDriver driver;

    public Hooks(Driver driver)
    {
        this.driver = driver.driver;
    }

    @Before
    public void Setup()
    {
    }
    @After
    public void Teardown()
    {
        driver.close();
    }
}
