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

WebUI.click(findTestObject('Page_PeeBu/kendo-grid_IdCreated DateEntityPriceTypeSou_7f689a'))

WebUI.click(findTestObject('Object Repository/Page_PeeBu/th_Id'))

WebUI.click(findTestObject('Object Repository/Page_PeeBu/th_Created Date'))

WebUI.click(findTestObject('Object Repository/Page_PeeBu/th_Entity'))

WebUI.click(findTestObject('Object Repository/Page_PeeBu/th_Price'))

WebUI.click(findTestObject('Object Repository/Page_PeeBu/th_Type'))

WebUI.click(findTestObject('Object Repository/Page_PeeBu/th_Source'))

WebUI.click(findTestObject('Object Repository/Page_PeeBu/td_1'))

WebUI.closeBrowser()

