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



class CheckTransactionChartStepDef {

	@When("I click on show charts button")
	def I_click_on_show_charts_button() {
		WebUI.click(findTestObject('Page_PeeBu/button_Show Chart'))
	}

	@Then("I verify that expenses chart is displayed")
	def I_verify_that_expenses_chart_is_displayed() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/text_Top 5 Expenses of Last Month'),0)
		WebUI.closeBrowser()
	}

	@Then("I verify that incomes chart is displayed")
	def I_verify_that_incomes_chart_is_displayed() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/text_Top 3 Incomes of Last Month'), 0)
		WebUI.closeBrowser()
	}
	
	@Then("I verify that latest transaction timeline is displayed")
	def I_verify_that_latest_transaction_timeline_is_displayed() {
		WebUI.scrollToElement(findTestObject('Object Repository/Page_PeeBu/div_LatestTransactionsSection'), 3)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/div_LatestTransactionsSection'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_PeeBu/h4_Latest Transactions'), 0)
		WebUI.closeBrowser()
	}
}