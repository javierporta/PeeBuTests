package stepdefs.peebu
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class CheckLandingPageLoadedStepDef {

	@Given("I have the browser open")
	public void i_have_the_browser_open() {
		WebUI.openBrowser('')
	}

	@When("I navigate to the URL")
	public void i_navigate_to_the_URL() {
		WebUI.navigateToUrl(GlobalVariable.PeeBu_URL)
	}

	@Then("I verify that the header {string} is present")
	public void i_verify_that_the_header_is_present(String string) {
		//To Do: Use string
		WebUI.verifyElementText(findTestObject('Object Repository/Page_PeeBu/span_Welcome to PeeBu'), 'Welcome to PeeBu')
	}

	@Then("I verify that the element (.*) is present")
	public void i_verify_that_the_element_headerId_is_present(String objectRepoId) {
		println("objectRepoId: " + objectRepoId);
		WebUI.verifyElementPresent(findTestObject(objectRepoId), 0)
		WebUI.closeBrowser()
	}
}