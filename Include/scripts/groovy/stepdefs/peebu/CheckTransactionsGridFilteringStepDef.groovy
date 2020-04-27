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



class CheckTransactionsGridFilteringStepDef {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@When("I click (.*) column filter")
	public void i_click_objectId_column_filter(String objectId) {

		WebUI.click(findTestObject(objectId))
	}

	@When("I type some (.*) in (.*) to filter")
	public void i_type_some_in_to_filter(String textToEnter, String objectId) {
		WebUI.setText(findTestObject(objectId), textToEnter)
	}

	@When("I click filter button")
	public void i_click_filter_button() {
		WebUI.click(findTestObject('Object Repository/Page_PeeBu/button_Filter'))
	}

	@Then("I see only filtered transactions with (.*)")
	public void i_see_only_filtered_transactions(String valueFiltered) {
		WebUI.verifyElementText(findTestObject('Object Repository/Page_PeeBu/FirstTableRow_Source'), valueFiltered)
		WebUI.closeBrowser()
	}
	
	@When("I click entity filter")
	public void i_click_entity_filter() {
		// Write code here that turns the phrase above into concrete actions

	}


	@When("I select a {string} to filter")
	public void i_select_a_to_filter(String string) {
		// Write code here that turns the phrase above into concrete actions

	}

	@When("I write a {string} to filter")
	public void i_write_a_to_filter(String string) {
		// Write code here that turns the phrase above into concrete actions

	}
}