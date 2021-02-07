package stepdefs;

import actions.FirstPageHelper;
import cucumber.api.java.en.Then;
import pages.*;

public class DeleteStepDefs {

    private DeleteScreen deleteScreen;
    private FirstScreen firstScreen;
    private SharedObjects sharedObjects;
    private FirstPageHelper firstPageHelper = new FirstPageHelper();

    public DeleteStepDefs(DeleteScreen deleteScreen,
                          FirstScreen firstScreen,
                          SharedObjects sharedObjects) {
        this.deleteScreen = deleteScreen;
        this.firstScreen = firstScreen;
        this.sharedObjects = sharedObjects;
    }

    @Then("^I delete the computer '(.*)'$")
    public void i_delete_the_computer(String strComputer) {

        firstScreen.SearchBox().clear();
        
        firstScreen.SearchBox().sendKeys(strComputer);

        firstScreen.FilterByNamebtn().click();

        firstScreen.GetRowsInTable();

        firstScreen.SelectFirstItem().click();

        deleteScreen.DeleteButton().click();
    }
}
