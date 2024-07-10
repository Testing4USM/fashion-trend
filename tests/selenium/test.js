const { Builder, Browser, Key, until, By } = require('selenium-webdriver');

describe('Selenium Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
    });

    afterAll(async () => {
        if (driver) {
            await driver.quit();
        }
    });

    test('Verify Main Page Title', async () => {
        await driver.get('http://localhost:3000/');
        await driver.wait(until.titleIs('Fashion Trend'), 5000);
        console.log('Test 1 passed: Verify main page title');
    });

    test('Navigate and Click Buttons', async () => {
        await driver.get('http://localhost:3000/');
        await driver.wait(until.elementLocated(By.css('.px-8')), 5000);
        
        await driver.findElement(By.css('.px-8')).click();
        await driver.sleep(2000);
        await driver.findElement(By.css('.lucide-user')).click();
        await driver.sleep(2000);
        console.log('Test 2 passed: Go to admin page');
    });
});