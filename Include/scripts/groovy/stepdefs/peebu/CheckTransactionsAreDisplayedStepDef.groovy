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



class CheckTransactionsAreDisplayedStepDef {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Then("I verify that the transactions grid is present")
	public void i_verify_that_the_transactions_grid_is_present() {
		WebUI.verifyElementPresent(findTestObject('Page_PeeBu/kendo-grid_IdCreated DateEntityPriceTypeSou_7f689a'))
	}

	@Then("I verify that the column (.*) is in the grid")
	public void i_verify_that_the_columns_are_in_the_grid(String objectRepoId) {

		println("objectRepoId: " + objectRepoId);
		WebUI.verifyElementPresent(findTestObject(objectRepoId), 0)
	}

	@Then("I verify that transactions are being displayed in the grid")
	public void i_verify_that_transactions_are_being_displayed_in_the_grid() {
		// Warning: is just checking id of first row. ToDo: more checks here
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/td_1'))
		WebUI.closeBrowser()
	}
}