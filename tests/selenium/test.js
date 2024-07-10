const {Builder, Browser, Key, until, By} = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  try {
    await driver.get('http://localhost:3000/');


    await testTitleMainPage(driver);
    await testNavigateAndVerifyTitle(driver);
    console.log('Test passed!');


} finally {

    await driver.quit();
}

})();

async function testTitleMainPage(driver) {
  await driver.wait(until.titleIs('Fashion Trend'), 5000);
  console.log('Test 1 passed: Verify main pagetitle');
}



async function testNavigateAndVerifyTitle(driver) {
  await driver.get('http://localhost:3000/');
  await driver.wait(until.elementLocated(By.css('.px-8')), 5000);

  await driver.findElement(By.css('.px-8')).click();
  await driver.sleep(2000);
  await driver.findElement(By.css('.lucide-user')).click();
  await driver.sleep(2000);
  console.log('Test 2 passed: Navigate and click Tienda button then Admin button');
}