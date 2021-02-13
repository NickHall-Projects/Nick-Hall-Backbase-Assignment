import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/Destination"},
        features = {"classpath:features"},
        tags = {"@wip"},
        glue = {"classpath:common","stepdefs"}
)

public class RunTest{ //extends AbstractTestNGCucumberTests {

}



