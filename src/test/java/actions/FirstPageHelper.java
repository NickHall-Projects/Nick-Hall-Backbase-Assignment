package actions;

import common.Driver;
import cucumber.api.DataTable;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pages.FirstScreen;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class FirstPageHelper {

    private FirstScreen firstScreen;

    public List<String> GetTableValues(WebDriver driver, int rows ) {

        List<String> TableValues = new ArrayList<>();

        WebElement element;

        try {
            for (int r = 1; r <= rows - 1; r++) {
                for (int c = 1; c <= 4; c++) {
                    String xpath = "//*[@id=\"main\"]/table/tbody/tr[" + r + "]/td[" + c + "]";
                    element = driver.findElement(By.xpath(xpath));
                    TableValues.add(element.getText());
                    }
                }
            }catch(Exception e) {
            System.err.printf("[ERROR] Failed ot get element from table\n");
            System.err.printf("[ERROR] %s \n",e.getStackTrace());
            System.err.printf("[ERROR] %s \n",e.getMessage());
            Assert.fail();
        }
        return TableValues;
    }

    public void CheckTableValues(WebDriver driver, List<String> TableValues,DataTable table)
    {
            List<List<String>> data = table.raw();

            if(TableValues.size()==0){
                Assert.fail("No items in the table to check");
            }
            try{
            for (int i = 0; i <= TableValues.size() - 1; i++) {
                if (data.get(0).get(i).contains("Introduced-Date") || data.get(0).get(i).contains("Discontinued-Date")) {
                    if (data.get(1).get(i).length() > 0) {
                        LocalDate date = LocalDate.parse(data.get(1).get(i));
                        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd MMM yyyy");
                        String formattedDate = date.format(myFormatObj);
                        Assert.assertTrue("Test table rows", TableValues.contains(formattedDate));
                    } else {
                        Assert.assertTrue("Test table rows", TableValues.contains("-"));
                    }
                } else {
                    Assert.assertTrue(TableValues.contains(data.get(1).get(i)));
                }
            }
        } catch (Exception e) {
            Assert.fail();
        }
    }
}
