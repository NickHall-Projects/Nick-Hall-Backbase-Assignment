package common;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BrowserConfig {
    private WebDriver driver;

    public WebDriver GetDriver() {

        String browser;
        //Used to run tests against different environments
        Properties prop = Utilities.getProperty("config.properties");
        String applicationUrl = (String) prop.get("application.url");

        //Used to execute different browsers
        if(System.getProperty("browserName") != null){
            browser = System.getProperty("browserName");
        }
        else{
            browser = System.getenv("browserName");
        }

        switch (browser.toLowerCase()) {
            case "chrome":
                System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");
                driver = new ChromeDriver();
                break;

            case "edge":
                System.setProperty("webdriver.edge.driver", "src/test/resources/driver/msedgedriver.exe");
                driver = new EdgeDriver();
                break;
        }

        System.out.printf("[INFO]  Using browser %s\n", browser);

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(applicationUrl);
        driver.manage().window().maximize();


        return driver;
    }
}
