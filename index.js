const {Builder, By, Key, util} = require("selenium-webdriver");

async function Test1() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.danfoss.com/en/");
    await driver.findElement(By.xpath("//*[contains(text(),'Explore Danfoss Product Store')]"));
    driver.quit();
}