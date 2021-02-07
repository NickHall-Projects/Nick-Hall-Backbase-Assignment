package pages;

import common.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class EditScreen {

    private WebDriver driver;
    private WebDriverWait wait;
    private WebElement element;

    public EditScreen(Driver driver)
    {
        this.driver = driver.driver;
        wait = new WebDriverWait(this.driver,10);
    }

    public WebElement SaveButton() {
        try {
            element = driver.findElement(By.cssSelector("input.btn.primary"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to find any message in the table %s\n %s\n", e.getMessage(), e.getStackTrace());
        }
        return element;
    }
}
