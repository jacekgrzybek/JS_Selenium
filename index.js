const {Builder, By, Key, util} = require("selenium-webdriver");
const TIMEOUT = 3000000

async function Test1() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.danfoss.com/en/");
    await driver.findElement(By.xpath("//*[contains(text(),'Explore Danfoss Product Store')]"));
    driver.quit();
}

async function Test2() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.danfoss.com/en/");
    
    await driver.manage().setTimeouts( {implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT});
    var acceptCookie = await driver.findElement(By.className("coi-banner__accept"));
    await acceptCookie.click();
    var searchField = await driver.findElement(By.id("header-search-input"));

    await searchField.sendKeys("Alsense\n");
    await driver.findElement(By.xpath("//*[contains(text(),'Alsense IoT cloud and monitoring')]"));
    await driver.findElement(By.xpath("//*[contains(text(),'.pdf')]"));
    await driver.quit();
}

async function Test3(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.danfoss.com/en/");
    var width = 500;
    var height = 800;
    await driver.manage().window().setRect({x: 0, y: 0, width: width, height: height});
    await !driver.findElement(By.xpath("//*[contains(text(),'Quick links')]")).isDisplayed();
    await driver.quit();
}

Test1();
Test2();
Test3();