package pages;

import actions.FirstPageHelper;
import common.Driver;
import common.Utilities;
import cucumber.api.DataTable;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;

public class FirstScreen {

    private WebDriver driver;
    private WebElement element = null;
    private WebDriverWait wait;
    private FirstPageHelper firstPageHelper = new FirstPageHelper();

    public FirstScreen(Driver driver) {
        this.driver = driver.driver;
        wait = new WebDriverWait(this.driver, 10);
    }

    public List<String> SearchTable(DataTable table) {

        Utilities.waitForLoad(driver);

        int rows = GetRowsInTable();

        return firstPageHelper.GetTableValues(driver, rows);
    }

    public void CheckTableContents(List<String> TableValues, DataTable table) {
        firstPageHelper.CheckTableValues(driver, TableValues, table);
    }

    public WebElement Title() {

        try {
            element = driver.findElement(By.xpath("/html/body/header/h1/a"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to locate page title %s\n %s\n", e.getMessage(), e.getStackTrace());
        }
        return element;
    }

    public WebElement HeaderTitle() {
        try {
            element = driver.findElement(By.xpath("//*[@id=\"main\"]/h1"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to locate page title %s\n %s\n", e.getMessage(), e.getStackTrace());
        }
        return element;
    }

    public WebElement SearchBox() {

        Utilities.waitForLoad(driver);
        try {
            element = driver.findElement(By.id("searchbox"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to locate web element searchbox %s\n %s\n", e.getMessage(), e.getStackTrace());
        }

        return element;
    }

    public WebElement SearchSubmit() {

        try {
            element = driver.findElement(By.id("searchSubmit"));

        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to locate web element searchSubmit %s\n %s\n", e.getMessage(), e.getStackTrace());
        }

        return element;
    }

    public WebElement AddANewComputerbtn() {

        try {
            element = driver.findElement(By.id("add"));

        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to locate web element add %s\n %s\n", e.getMessage(), e.getStackTrace());
        }

        return element;
    }

    public WebElement FilterByNamebtn() {

        try {
            element = driver.findElement(By.id("searchsubmit"));

        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to locate web element searchsubmit %s\n %s\n", e.getMessage(), e.getStackTrace());
        }

        return element;
    }

    public int GetRowsInTable() {

        int rows = 0;

        Utilities.waitForLoad(driver);

        try {
            rows = driver.findElements(By.tagName("tr")).size();
        } catch (Exception e) {
            System.out.printf("[ERROR] Locating table %s\n %s\n", e.getMessage(), e.getStackTrace());
        }

        return rows;
    }

    public WebElement SelectFirstItem() {

        Utilities.waitForLoad(driver);

        try {
            element = driver.findElement(By.xpath("//*[@id=\"main\"]/table/tbody/tr[1]/td[1]/a"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to find first line of table %s\n %s\n", e.getMessage(), e.getStackTrace());
        }

        return element;
    }

    public WebElement GetTableMessage() {

        Utilities.waitForLoad(driver);

        try {
            element = driver.findElement(By.xpath("//*[@id=\"main\"]/div[2]"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to find any message in the table %s\n %s\n", e.getMessage(), e.getStackTrace());
        }
        return element;
    }

    public WebElement Next()
    {
        Utilities.waitForLoad(driver);

        try {
            element = driver.findElement(By.xpath("//*[@id=\"pagination\"]/ul/li[3]/a"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to find any message in the table %s\n %s\n", e.getMessage(), e.getStackTrace());
        }
        return element;
    }

    public WebElement Previous()
    {
        Utilities.waitForLoad(driver);

        try {
            element = driver.findElement(By.xpath("//*[@id=\"pagination\"]/ul/li[1]/a"));
        } catch (Exception e) {
            System.out.printf("[ERROR] Unable to find any message in the table %s\n %s\n", e.getMessage(), e.getStackTrace());
        }
        return element;
    }
}
