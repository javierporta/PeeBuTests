$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/javie/Documents/Leiria/Semester 2/Software Quality/Project/GitHub/PeeBuTests/Include/features/CheckLandingPageLoaded.feature");
formatter.feature({
  "name": "Check landing page is loaded",
  "description": "  As a user \n  I want to navigate to {insertMyWebURL}\n  So that I can see the landing page",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check title of the page is present",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the browser open",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_have_the_browser_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the URL",
  "keyword": "When "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to navigate to \u0027http://localhost:4200/\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat ✽.I navigate to the URL(C:/Users/javie/Documents/Leiria/Semester 2/Software Quality/Project/GitHub/PeeBuTests/Include/features/CheckLandingPageLoaded.feature:8)\r\nCaused by: org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dconnectionFailure\u0026u\u003dhttp%3A//localhost%3A4200/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dFirefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20localhost%3A4200.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-GVM9QB9\u0027, ip: \u0027192.168.44.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.webui.driver.firefox.CGeckoDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 17712, moz:profile: C:\\Users\\javie\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(direct), rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: da088a81-8b38-4791-a0d0-e6e735a7176e\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CFirefoxDriver.execute(CFirefoxDriver.java:27)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringNavigation.to(EventFiringWebDriver.java:569)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.doCall(NavigateToUrlKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.call(NavigateToUrlKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat RunCheckLandingPageLoadedFeature.run(RunCheckLandingPageLoadedFeature:18)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1585596267487.run(TempTestSuite1585596267487.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the header \"PeeBu\" is present",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_verify_that_the_header_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Check elements are present",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have the browser open",
  "keyword": "Given "
});
formatter.step({
  "name": "I navigate to the URL",
  "keyword": "When "
});
formatter.step({
  "name": "I verify that the element \u003cobjectId\u003e is present",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "objectId"
      ]
    },
    {
      "cells": [
        "Object Repository/Page_PeeBu/h1_Home"
      ]
    },
    {
      "cells": [
        "Object Repository/Page_PeeBu/h2_Transactions"
      ]
    },
    {
      "cells": [
        "Object Repository/Page_PeeBu/button_Show Chart"
      ]
    },
    {
      "cells": [
        "Object Repository/Page_PeeBu/footer_Polythecnic Of Leiria"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check elements are present",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have the browser open",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_have_the_browser_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the URL",
  "keyword": "When "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to navigate to \u0027http://localhost:4200/\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat ✽.I navigate to the URL(C:/Users/javie/Documents/Leiria/Semester 2/Software Quality/Project/GitHub/PeeBuTests/Include/features/CheckLandingPageLoaded.feature:13)\r\nCaused by: org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dconnectionFailure\u0026u\u003dhttp%3A//localhost%3A4200/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dFirefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20localhost%3A4200.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-GVM9QB9\u0027, ip: \u0027192.168.44.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.webui.driver.firefox.CGeckoDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 19840, moz:profile: C:\\Users\\javie\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(direct), rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3ee08e1c-d4f9-454d-9ec8-819cbdb148d4\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CFirefoxDriver.execute(CFirefoxDriver.java:27)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringNavigation.to(EventFiringWebDriver.java:569)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.doCall(NavigateToUrlKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.call(NavigateToUrlKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat RunCheckLandingPageLoadedFeature.run(RunCheckLandingPageLoadedFeature:18)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1585596267487.run(TempTestSuite1585596267487.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the element Object Repository/Page_PeeBu/h1_Home is present",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_verify_that_the_element_headerId_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check elements are present",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have the browser open",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_have_the_browser_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the URL",
  "keyword": "When "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to navigate to \u0027http://localhost:4200/\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat ✽.I navigate to the URL(C:/Users/javie/Documents/Leiria/Semester 2/Software Quality/Project/GitHub/PeeBuTests/Include/features/CheckLandingPageLoaded.feature:13)\r\nCaused by: org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dconnectionFailure\u0026u\u003dhttp%3A//localhost%3A4200/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dFirefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20localhost%3A4200.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-GVM9QB9\u0027, ip: \u0027192.168.44.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.webui.driver.firefox.CGeckoDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 18184, moz:profile: C:\\Users\\javie\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(direct), rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b21f49b4-fe5c-4436-aaf9-cc973fe1b577\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CFirefoxDriver.execute(CFirefoxDriver.java:27)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringNavigation.to(EventFiringWebDriver.java:569)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.doCall(NavigateToUrlKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.call(NavigateToUrlKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat RunCheckLandingPageLoadedFeature.run(RunCheckLandingPageLoadedFeature:18)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1585596267487.run(TempTestSuite1585596267487.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the element Object Repository/Page_PeeBu/h2_Transactions is present",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_verify_that_the_element_headerId_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check elements are present",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have the browser open",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_have_the_browser_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the URL",
  "keyword": "When "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to navigate to \u0027http://localhost:4200/\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat ✽.I navigate to the URL(C:/Users/javie/Documents/Leiria/Semester 2/Software Quality/Project/GitHub/PeeBuTests/Include/features/CheckLandingPageLoaded.feature:13)\r\nCaused by: org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dconnectionFailure\u0026u\u003dhttp%3A//localhost%3A4200/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dFirefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20localhost%3A4200.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-GVM9QB9\u0027, ip: \u0027192.168.44.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.webui.driver.firefox.CGeckoDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 4664, moz:profile: C:\\Users\\javie\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(direct), rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d6079946-8a08-40b9-abaa-f0aac70d0c58\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CFirefoxDriver.execute(CFirefoxDriver.java:27)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringNavigation.to(EventFiringWebDriver.java:569)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.doCall(NavigateToUrlKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.call(NavigateToUrlKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat RunCheckLandingPageLoadedFeature.run(RunCheckLandingPageLoadedFeature:18)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1585596267487.run(TempTestSuite1585596267487.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the element Object Repository/Page_PeeBu/button_Show Chart is present",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_verify_that_the_element_headerId_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check elements are present",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have the browser open",
  "keyword": "Given "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_have_the_browser_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the URL",
  "keyword": "When "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to navigate to \u0027http://localhost:4200/\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat ✽.I navigate to the URL(C:/Users/javie/Documents/Leiria/Semester 2/Software Quality/Project/GitHub/PeeBuTests/Include/features/CheckLandingPageLoaded.feature:13)\r\nCaused by: org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003dconnectionFailure\u0026u\u003dhttp%3A//localhost%3A4200/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dFirefox%20can%E2%80%99t%20establish%20a%20connection%20to%20the%20server%20at%20localhost%3A4200.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-GVM9QB9\u0027, ip: \u0027192.168.44.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.core.webui.driver.firefox.CGeckoDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 12432, moz:profile: C:\\Users\\javie\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(direct), rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c23ca9b8-f529-480a-aa8d-eff84f73a39d\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CFirefoxDriver.execute(CFirefoxDriver.java:27)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringNavigation.to(EventFiringWebDriver.java:569)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.doCall(NavigateToUrlKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword$_navigateToUrl_closure1.call(NavigateToUrlKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.navigateToUrl(NavigateToUrlKeyword.groovy:83)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword.execute(NavigateToUrlKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:72)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.navigateToUrl(WebUiBuiltInKeywords.groovy:183)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$navigateToUrl$0.call(Unknown Source)\r\n\tat stepdefs.peebu.CheckLandingPageLoadedStepDef.i_navigate_to_the_URL(CheckLandingPageLoadedStepDef.groovy:56)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:76)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:46)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:169)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.call(Unknown Source)\r\n\tat RunCheckLandingPageLoadedFeature.run(RunCheckLandingPageLoadedFeature:18)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:337)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:328)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:307)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:299)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:233)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:169)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:142)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:91)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1585596267487.run(TempTestSuite1585596267487.groovy:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify that the element Object Repository/Page_PeeBu/footer_Polythecnic Of Leiria is present",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckLandingPageLoadedStepDef.i_verify_that_the_element_headerId_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
});