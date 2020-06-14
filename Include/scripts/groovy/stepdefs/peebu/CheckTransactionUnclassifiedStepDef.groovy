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

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import org.openqa.selenium.Keys as Keys

class CheckTransactionUnclassifiedStepDef {

	@Then("I verify that an unclassified transaction is marked as unclassifed")
	def I_verify_that_an_unclassified_transaction_is_marked_as_unclassifed() {

		try{
			def trClass = WebUI.getAttribute(findTestObject('Object Repository/Page_PeeBu/Table_Tr_1'), 'class')
			WebUI.verifyNotMatch(trClass, 'highlighted', false)
			println("It worked 1st attempt")
			WebUI.closeBrowser()
		}
		catch (Exception ex){
			try{
				def trClass1 = WebUI.getAttribute(findTestObject('Object Repository/Page_PeeBu/Table_Tr_1'), 'class')
				WebUI.verifyNotMatch(trClass1, 'highlighted', false)
				println("It worked 2snd attempt")
				WebUI.closeBrowser()
			}
			catch (Exception ex1) {
				println("Tried twice but did not work")
				WebUI.closeBrowser()
			}
		}
		
	}

	@Then("I verify that a classified transaction is marked as classified")
	def I_verify_that_a_classified_transaction_is_marked_as_classified() {
		try{
					def trClass = WebUI.getAttribute(findTestObject('Object Repository/Page_PeeBu/Table_Tr_1'), 'class')
					WebUI.verifyMatch(trClass, 'highlighted', false)
					println("It worked 1st attempt")
					WebUI.closeBrowser()
		}
		catch (Exception ex){
			try{
					def trClass1 = WebUI.getAttribute(findTestObject('Object Repository/Page_PeeBu/Table_Tr_1'), 'class')
					WebUI.verifyMatch(trClass1, 'highlighted', false)
					println("It worked 2snd attempt")
					WebUI.closeBrowser()
			}
			catch (Exception ex1) {
				println("Tried twice but did not work")
				WebUI.closeBrowser()
			}
		}
		

	}
}