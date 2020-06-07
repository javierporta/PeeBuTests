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



class CheckClassifyTransactionsStepDef {

	@Then("I verify that classifications are displayed in a grid row")
	def I_verify_that_classifications_are_displayed_in_a_grid_row() {

		//Food
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_Unclassified_classify_food_0_btn'))
		// Health
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_food_classify_health_0_btn'))
		// Education
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_health_classify_education_0_btn'))
		// Household
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_education_classify_household_0_btn'))
		// Entertainment
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_household_classify_entertainment_0_btn'))
		// Transportation
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_entertainment_classify_transportation_0_btn'))
		// Vet
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_transportation_classify_vet_0_btn'))
		// Others
		WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_vet_classify_others_0_btn'))


		WebUI.closeBrowser()
	}

	@Then("I verify that transactions are unclassified")
	def I_verify_that_transactions_are_unclassified() {

		for (int gridRowIndex = 1; gridRowIndex <= 3; gridRowIndex++) {
			WebUI.verifyElementText(findTestObject('Object Repository/Page_PeeBu/Classification/Classification_Row_' + gridRowIndex),"unclassified")
		}

		WebUI.closeBrowser()
	}

	@When("I click in a classification row button (.*)")
	def I_click_in_a_classification_row_button(String button) {

		WebUI.click(findTestObject(button))
	}

	@Then("I verify that transaction classification was updated (.*) with (.*)")
	def I_verify_that_transaction_classification_was_updated(String column, String classificationName) {

		WebUI.verifyElementText(findTestObject(column),classificationName)

		WebUI.closeBrowser()
	}


	@Then("I verify that transactions that match the pattern were autoclassified")
	def I_verify_that_transactions_that_match_the_pattern_were_autoclassified() {
		// IMPORTANT: Same pattern is: Entity, Source and Type and current classification is "unclassified"

		//Classifying  using entertainment
		String currentClassification = "entertainment"

		WebUI.verifyElementText(findTestObject('Page_PeeBu/Classification/td_entertainment_92'), currentClassification)

		WebUI.verifyElementText(findTestObject('Page_PeeBu/Classification/td_entertainment_85'), currentClassification)

		WebUI.closeBrowser()
	}

	@Then("I verify that transaction that does not match the pattern was not autoclassified")
	def I_verify_that_transaction_that_does_not_match_the_pattern_was_not_autoclassified() {
		//same row, classified should be ok
		WebUI.verifyElementText(findTestObject('Object Repository/Page_PeeBu/Classification/td_classification_79'), "transportation")

		// Next transactions has the same entity but different source and type, so it should not be classified
		WebUI.verifyElementText(findTestObject('Object Repository/Page_PeeBu/Classification/td_classification_6'), "unclassified")

		WebUI.closeBrowser()
	}
}