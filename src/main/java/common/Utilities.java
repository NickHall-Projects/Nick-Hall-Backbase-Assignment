package common;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Utilities {

    private static ChromeDriver driver;

    public static void waitForLoad(WebDriver driver) {
        ExpectedCondition<Boolean> pageLoadCondition = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
                    }
                };
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(pageLoadCondition);
    }

    public static Properties getProperty(String filePath) {

        Properties prop = new Properties();

        try (InputStream resourceAsStream = Utilities.class.getClassLoader().getResourceAsStream(filePath)) {
            prop.load(resourceAsStream);
        } catch (IOException e) {
            System.err.printf("[ERROR] Properties file %s not loaded \n %s\n %s\n", filePath,e.getMessage(),e.getStackTrace());
        }

        return prop;
    }

    private static WebDriver OpenBrowser(String sBrowserName) throws Exception{

        try{
            if(sBrowserName.equals("chrome")){
                driver = new ChromeDriver();
                driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
                driver.get(String.valueOf(getProperty ("config.properties")));
            }
        }catch (Exception e){
            System.err.printf("[ERROR] Incorrect driver specified %s\n %s\n %s\n", sBrowserName,e.getMessage(),e.getStackTrace());
        }
        return driver;
    }

    public static By GetBy(String elementLocator, String elementName) {
        By by = null;
        switch (elementLocator) {
            case "class":
                by = By.className(elementName);
                break;
            case "id":
                by = By.id(elementName);
                break;
            case "css":
                by = By.cssSelector(elementName);
                break;
        }
        return by;
    }

}
