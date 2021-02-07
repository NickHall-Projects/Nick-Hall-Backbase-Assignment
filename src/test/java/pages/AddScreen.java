package pages;

import common.Driver;
import common.Utilities;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;


public class AddScreen {

    private WebDriver driver;
    private WebDriverWait wait;

    public AddScreen(Driver driver)
    {
        this.driver = driver.driver;
        wait = new WebDriverWait(this.driver,10);
    }

    public WebElement ComputerName() throws Exception
    {
        WebElement element = null;

        Utilities.waitForLoad(driver);

        try{
            element = driver.findElement(By.id("name"));
        }catch(Exception e)
        {
            System.out.printf("[ERROR] Unable to locate web element Computername %s\n %s\n", e.getMessage(),e.getStackTrace());
        }

        return element;
    }

    public WebElement IntroducedDate() throws Exception
    {
        WebElement element = null;

        Utilities.waitForLoad(driver);

        try{
            element = driver.findElement(By.id("introduced"));

        }catch(Exception e)
        {
            System.out.printf("[ERROR] Unable to locate web element IntroducedDate %s\n %s\n", e.getMessage(),e.getStackTrace());
        }

        return element;
    }

    public WebElement DiscontinuedDate() throws Exception
    {
        WebElement element = null;

        Utilities.waitForLoad(driver);

        try{
            element = driver.findElement(By.id("discontinued"));

        }catch(Exception e)
        {
            System.out.printf("[ERROR] Unable to locate web element Discontinued %s\n %s\n", e.getMessage(),e.getStackTrace());
        }

        return element;
    }

    public WebElement Company() throws Exception
    {
        WebElement element = null;

        try{
            element = driver.findElement(By.id("company"));

        }catch(Exception e)
        {
            System.out.printf("[ERROR] Unable to locate web element Company %s\n %s\n", e.getMessage(),e.getStackTrace());
        }

        return element;
    }

    public WebElement CreateButton() throws Exception
    {
        WebElement element = null;

        try{
            element = driver.findElement(By.cssSelector("input.btn.primary"));

        }catch(Exception e)
        {
            System.out.printf("[ERROR] Unable to locate web element Create %s\n %s\n", e.getMessage(),e.getStackTrace());
        }

        return element;
    }

    public WebElement CheckWarningBlock() {
        WebElement element = null;

        try{
            element = driver.findElement(By.cssSelector("div.clearfix.error"));

        }catch(Exception e)
        {
            System.out.printf("[ERROR] Unable to locate web element Create %s\n %s\n", e.getMessage(),e.getStackTrace());
        }

        return element;
    }
}
