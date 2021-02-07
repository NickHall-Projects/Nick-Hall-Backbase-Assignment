package stepdefs;

import actions.FirstPageHelper;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.*;

import java.util.List;

public class FirstScreenStepDefs {

    private FirstScreen firstScreen;
    private AddScreen addScreen;
    private EditScreen editScreen;
    private SharedObjects sharedObjects;
    private DeleteScreen deleteScreen;
    private FirstPageHelper firstPageHelper = new FirstPageHelper();

    public FirstScreenStepDefs(FirstScreen firstScreen,
                               AddScreen addScreen,
                               EditScreen editScreen,
                               SharedObjects sharedObjects,
                               DeleteScreen deleteScreen) {
        this.firstScreen = firstScreen;
        this.addScreen = addScreen;
        this.editScreen = editScreen;
        this.deleteScreen = deleteScreen;
        this.sharedObjects = sharedObjects;
    }

    @Given("^the computer database is open$")
    public void the_database_is_open() {
        Assert.assertTrue("Check page has loaded", firstScreen.Title().getText().contains("Play sample application — Computer database"));
    }

    @When("^I add a new computer$")
    public void i_add_a_new_computer(DataTable table) throws Throwable {
        List<List<String>> data = table.raw();

        firstScreen.AddANewComputerbtn().click();

        addScreen.ComputerName().sendKeys(data.get(1).get(0));

        addScreen.IntroducedDate().sendKeys(data.get(1).get(1));

        addScreen.DiscontinuedDate().sendKeys(data.get(1).get(2));

        addScreen.Company().sendKeys(data.get(1).get(3));

        addScreen.CreateButton().click();
    }

    @Then("^the block is highlighted caused by the '(.*)'$")
    public void the_block_is_highlighted(String strText) {
        Assert.assertTrue("Check the block is highlihgted caused by the " + strText + " field",addScreen.CheckWarningBlock().getText().contains(strText));
    }


    @Then("^I can see the computer in the list$")
    public void i_can_see_the_computer_in_the_list(DataTable table) {
        List<List<String>> data = table.raw();

        Assert.assertTrue(sharedObjects.AlertMessageWarning().getText().contains("Done! Computer " + data.get(1).get(0) +" has been created"));

        firstScreen.SearchBox().clear();

        firstScreen.SearchBox().sendKeys(data.get(1).get(0));

        firstScreen.FilterByNamebtn().click();

        List<String> tableValues = firstScreen.SearchTable(table);

        firstScreen.CheckTableContents(tableValues,table);
    }



    @Then("^I check the computer has been removed from the database$")
    public void the_computer_is_no_longer_in_the_list(DataTable table) {

        List<List<String>> data = table.raw();

        Assert.assertTrue(sharedObjects.AlertMessageWarning().getText().contains("Done! Computer has been deleted"));

        firstScreen.SearchBox().clear();

        firstScreen.SearchBox().sendKeys(data.get(1).get(0));

        firstScreen.FilterByNamebtn().click();

        Assert.assertTrue("Check the correct message is displayed in the table",
                firstScreen.GetTableMessage().getText().contains(data.get(1).get(1)));
    }

    @When("^I click cancel in the edit screen for '(.*)'$")
    public void i_click_cancel_on_the_deletion_of_Test_Computer(String strComputer) {

        firstScreen.SearchBox().sendKeys(strComputer);

        firstScreen.FilterByNamebtn().click();

        firstScreen.GetRowsInTable();

        firstScreen.SelectFirstItem().click();

        sharedObjects.CancelButton().click();

        Assert.assertTrue(firstScreen.HeaderTitle().getText().contains("computers found"));
    }

    @Then("^I check the computer '(.*)' has been not been removed from the database$")
    public void i_check_the_computer_has_been_not_been_removed_from_the_database(String strComputer) {
        firstScreen.SearchBox().sendKeys(strComputer);

        firstScreen.FilterByNamebtn().click();

        int rows = firstScreen.GetRowsInTable();

        Assert.assertEquals("Check the entry has not been removed",rows,2);
    }

    @When("^I click the next button$")
    public void i_click_the_next_button() throws Throwable {
        firstScreen.Next().click();
    }

    @Then("^I check the table view$")
    public void i_check_the_table_view() throws Throwable {
        Assert.assertTrue("Check the view has returned data",firstScreen.GetRowsInTable()>0);
    }

    @Then("^I click the previous button$")
    public void i_click_the_previous_button() throws Throwable {
        firstScreen.Previous().click();
    }
}
