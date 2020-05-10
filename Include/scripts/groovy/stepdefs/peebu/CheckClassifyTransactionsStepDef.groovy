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
}