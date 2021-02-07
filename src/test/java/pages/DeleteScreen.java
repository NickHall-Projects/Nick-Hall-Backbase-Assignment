package pages;

import actions.FirstPageHelper;
import common.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DeleteScreen {

    private WebDriver driver;
    private WebElement element = null;
    private WebDriverWait wait;
    private FirstPageHelper iniPageActions = new FirstPageHelper();

    public DeleteScreen(Driver driver) {
        this.driver = driver.driver;
        wait = new WebDriverWait(this.driver, 10);
    }

    public WebElement DeleteButton() {
        try {
            element = driver.findElement(By.cssSelector("input.btn.danger"));
        } catch (Exception e)
        {
            System.out.printf("[ERROR] Unable to find delete button %s\n %s\n", e.getMessage(),e.getStackTrace());
        }
        return element;
    }
}
