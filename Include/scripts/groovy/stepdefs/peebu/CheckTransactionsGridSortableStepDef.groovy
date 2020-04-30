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


class CheckTransactionsGridSortableStepDef {
	@When("I click amount column")
	public void i_click_amount_column() {
		WebUI.click(findTestObject('Object Repository/Page_PeeBu/span_Price'))
		
	}
	
	@Then("I verify that grid is sorted by amount in ascending order")
	public void i_verify_that_grid_is_sorted_by_amount_in_ascending_order() {
		//we are showing ascending arrow
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/span_Transactions_k-icon k-i-sort-asc-sm'), 0)
		
		String firstRowAmountString = WebUI.getText(findTestObject('Page_PeeBu/FirstTableRow_Amount'))
		String secondRowAmountString = WebUI.getText(findTestObject('Page_PeeBu/SecondTableRow_Amount'))
		String thirdRowAmountString = WebUI.getText(findTestObject('Page_PeeBu/ThirdTableRow_Amount'))
		
		
		float firstRowAmount = Float.parseFloat(firstRowAmountString.replace('$', '')) //remove $ and convert to float to be comparable with others
		float secondRowAmount = Float.parseFloat(secondRowAmountString.replace('$', '')) //remove $ and convert to float to be comparable with others
		float thirdRowAmount = Float.parseFloat(thirdRowAmountString.replace('$', '')) //remove $ and convert to float to be comparable with others
		
		//verify first row amount is smaller than second one
		WebUI.verifyLessThanOrEqual(firstRowAmount, secondRowAmount)

		//verify second row amount is smaller than third one
		WebUI.verifyLessThanOrEqual(secondRowAmount, thirdRowAmount)
		
		WebUI.closeBrowser()
		
	}
	
	@When("I click twice amount column")
	public void i_click_twice_amount_column() {
		WebUI.click(findTestObject('Object Repository/Page_PeeBu/span_Price'))
		WebUI.click(findTestObject('Object Repository/Page_PeeBu/span_Price'))
	}
	
	@Then("I verify that grid is sorted by amount in descending order")
	public void i_verify_that_grid_is_sorted_by_amount_in_descending_order() {
		//we are showing ascending arrow
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/span_Transactions_k-icon k-i-sort-desc-sm'), 0)
		
		String firstRowAmountString = WebUI.getText(findTestObject('Page_PeeBu/FirstTableRow_Amount'))
		String secondRowAmountString = WebUI.getText(findTestObject('Page_PeeBu/SecondTableRow_Amount'))
		String thirdRowAmountString = WebUI.getText(findTestObject('Page_PeeBu/ThirdTableRow_Amount'))
		
		float firstRowAmount = Float.parseFloat(firstRowAmountString.replace('$', '')) //remove $ and convert to float to be comparable with others
		float secondRowAmount = Float.parseFloat(secondRowAmountString.replace('$', '')) //remove $ and convert to float to be comparable with others
		float thirdRowAmount = Float.parseFloat(thirdRowAmountString.replace('$', '')) //remove $ and convert to float to be comparable with others
		
		//verify first row amount is greater than second one
		WebUI.verifyGreaterThanOrEqual(firstRowAmount, secondRowAmount)

		//verify second row amount is greater than third one
		WebUI.verifyGreaterThanOrEqual(secondRowAmount, thirdRowAmount)
		
		WebUI.closeBrowser()
		
	 
	}
}