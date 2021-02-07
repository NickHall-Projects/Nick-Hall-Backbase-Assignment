package common;

import org.openqa.selenium.WebDriver;


public class Driver {

    public WebDriver driver = new BrowserConfig().GetDriver();

   public WebDriver GetDriver()
   {
       return driver;
   }
}
