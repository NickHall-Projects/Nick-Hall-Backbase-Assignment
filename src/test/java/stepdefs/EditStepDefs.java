package stepdefs;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.AddScreen;
import pages.EditScreen;
import pages.FirstScreen;
import pages.SharedObjects;

import java.util.List;

public class EditStepDefs {

    private FirstScreen firstScreen;
    private AddScreen addScreen;
    private EditScreen editScreen;
    private SharedObjects sharedObjects;

    public EditStepDefs(FirstScreen firstScreen,
                        AddScreen addScreen,
                        EditScreen editScreen,
                        SharedObjects sharedObjects){

        this.firstScreen = firstScreen;
        this.addScreen = addScreen;
        this.editScreen = editScreen;
        this.sharedObjects = sharedObjects;
    }

    @When("^I edit an existing entry$")
    public void i_edit_an_existing_entry(DataTable table) throws Throwable {

        List<List<String>> data = table.raw();

        firstScreen.SearchBox().clear();

        firstScreen.SearchBox().sendKeys(data.get(1).get(0));

        firstScreen.FilterByNamebtn().click();

        firstScreen.GetRowsInTable();

        firstScreen.SelectFirstItem().click();

        if(data.get(1).get(1).length()>0)
        {
            addScreen.ComputerName().clear();
            addScreen.ComputerName().sendKeys(data.get(1).get(1));
        }
        else{
            addScreen.ComputerName().clear();
        }

        if(data.get(1).get(2).length()>0)
        {
            addScreen.IntroducedDate().clear();
            addScreen.IntroducedDate().sendKeys(data.get(1).get(2));
        }
        else{
            addScreen.IntroducedDate().clear();
        }

        if(data.get(1).get(3).length()>0)
        {
            addScreen.DiscontinuedDate().clear();
            addScreen.DiscontinuedDate().sendKeys(data.get(1).get(3));
        }
        else{
            addScreen.DiscontinuedDate().clear();
        }

        if(data.get(1).get(4).length()>0)
        {
            addScreen.Company().sendKeys(data.get(1).get(4));
        }

        editScreen.SaveButton().click();

    }

    @Then("^I check the entry has been updated$")
    public void i_check_the_entry_has_been_updated(DataTable table) throws Throwable {

        List<List<String>> data = table.raw();

        Assert.assertTrue(sharedObjects.AlertMessageWarning().getText().contains("Done! Computer " + data.get(1).get(1) +" has been updated"));

        firstScreen.SearchBox().clear();

        firstScreen.SearchBox().sendKeys(data.get(1).get(0));

        firstScreen.FilterByNamebtn().click();

        firstScreen.GetRowsInTable();

        firstScreen.SelectFirstItem().click();

        Assert.assertEquals("Check the Computer name has been updated successfully",addScreen.ComputerName().getAttribute("value"),data.get(1).get(1));

        Assert.assertEquals("Check the Introduced date has been updated successfully",addScreen.IntroducedDate().getAttribute("value"),data.get(1).get(2));

        Assert.assertEquals("Check the Discontinued date has been updated successfully",addScreen.DiscontinuedDate().getAttribute("value"),data.get(1).get(3));

        Assert.assertEquals("Check the correct Company name is selected",
        sharedObjects.GetSelectedValueByFirstSelectedOption("id","company"),data.get(1).get(4));
    }
}
