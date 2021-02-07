package pages;

import common.Driver;
import common.Utilities;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SharedObjects {
    private WebDriver driver;
    private WebDriverWait wait;
    private WebElement element;

    public SharedObjects(Driver driver) {
        this.driver = driver.driver;
        wait = new WebDriverWait(this.driver, 10);

    }

    public WebElement CancelButton() {
        try {
            element = driver.findElement(By.xpath("//*[contains(@class,\"btn\") and contains(text(),\"Cancel\")]"));
        } catch (Exception e)
        {
            System.out.printf("[ERROR] Unable to find any message in the table %s\n %s\n", e.getMessage(),e.getStackTrace());
        }
        return element;
    }

    public WebElement AlertMessageWarning()
    {
        try {
            element = driver.findElement(By.cssSelector("div.alert-message.warning"));
        } catch (Exception e){
            System.out.printf("[ERROR] Unable to locate Alert warning message %s\n %s\n", e.getMessage(),e.getStackTrace());
        }
        return element;
    }

    public String GetSelectedValueByFirstSelectedOption(String elementLocator,String elementName)
    {
        WebElement option = null;
        By by = null;

        by = Utilities.GetBy(elementLocator,elementName);

        try {
            Select select = new Select(driver.findElement(by));
            option = select.getFirstSelectedOption();
        } catch(Exception e)
        {
            System.out.printf("[ERROR] Unable to locate web element %s\n %s\n %s\n", elementName, e.getMessage(),e.getStackTrace());
        }

        return option.getText();
    }
}
