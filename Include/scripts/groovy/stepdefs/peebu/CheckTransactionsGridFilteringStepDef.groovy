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
		println("column filter objectId: " + objectId)
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

	@Then("I see only filtered transactions with (.*) in (.*)")
	public void i_see_only_filtered_transactions(String valueFiltered, String objectId) {
		WebUI.verifyElementText(findTestObject(objectId), valueFiltered)
		WebUI.closeBrowser()
	}



	@When("I write the startDate {string} to filter")
	public void i_write_the_start_date_to_filter(String startDateInput) {
		println("startDate: " + startDateInput)
		WebUI.setText(findTestObject('Page_PeeBu/KendoGridDateFilter_Input_1'), startDateInput)
	}

	@When("I write the endDate {string} to filter")
	public void i_write_the_end_date_to_filter(String endDateInput) {
		println("endDate: " + endDateInput)
		WebUI.click(findTestObject('Page_PeeBu/Filter_CreatedDate_Comparator_2'))
		WebUI.click(findTestObject('Page_PeeBu/KendoGridDateColumn_IsBefore_Dropdown'))
		WebUI.setText(findTestObject('Page_PeeBu/KendoGridDateFilter_Input_2'), endDateInput)
	}

	@Then("I see only filtered transactions within those dates")
	public void i_see_only_filtered_transactions_within_those_dates() {
		//maybe I can get the text here and check if it's between dates
		WebUI.verifyElementPresent(findTestObject('Page_PeeBu/FirstTableRow_CreateDate'), 0)
		WebUI.closeBrowser()
	}

	@When("I write the number {string} to filter")
	public void i_write_the_number_to_filter(String numberToFilter) {
		println("numberToFilter: " + numberToFilter)
		WebUI.setText(findTestObject('Object Repository/Page_PeeBu/KenoGridNumberFilter_Input_1'), numberToFilter)
	}


	@Then("I see only filtered transactions with this price")
	public void i_see_only_filtered_transactions_with_this_price() {
		//todo: try to get the price
		WebUI.verifyElementPresent(findTestObject('Page_PeeBu/FirstTableRow_Amount'), 0)
		WebUI.closeBrowser()
	}

	@Then("I don't see any transaction")
	public void i_dont_see_any_transaction() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/td_No records available'), 0)
		WebUI.closeBrowser()
	}
}