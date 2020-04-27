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

WebUI.click(findTestObject('Object Repository/Page_PeeBu/a_Created Date_k-grid-filter'))

WebUI.setText(findTestObject('Page_PeeBu/KendoGridDateFilter_Input_1'), '010920190000')

WebUI.click(findTestObject('Page_PeeBu/Filter_CreatedDate_Comparator_2'))

WebUI.click(findTestObject('Page_PeeBu/KendoGridDateColumn_IsBefore_Dropdown'))

WebUI.setText(findTestObject('Page_PeeBu/KendoGridDateFilter_Input_2'), '011020190000')

WebUI.click(findTestObject('Page_PeeBu/button_Filter'))

WebUI.verifyElementPresent(findTestObject('Page_PeeBu/FirstTableRow_CreateDate'), 0)

WebUI.closeBrowser()

