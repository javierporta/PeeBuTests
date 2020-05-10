import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:4200/')

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_Unclassified_classify_food_0_btn'), FailureHandling.STOP_ON_FAILURE)

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_food_classify_health_0_btn'))

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_health_classify_education_0_btn'))

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_education_classify_household_0_btn'))

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_household_classify_entertainment_0_btn'))

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_entertainment_classify_transportation_0_btn'))

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_transportation_classify_vet_0_btn'))

WebUI.verifyElementClickable(findTestObject('Page_PeeBu/Classification/a_vet_classify_others_0_btn'))

WebUI.closeBrowser()

