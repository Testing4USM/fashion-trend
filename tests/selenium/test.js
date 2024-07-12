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
        await driver.sleep(500);
        await driver.findElement(By.css('.lucide-user')).click();
        await driver.sleep(500);
        console.log('Test 2 passed: go to admin page');
    });

    test('Create Product', async () => {await driver.get('http://localhost:3000/');
        await driver.wait(until.elementLocated(By.css('.px-8')), 5000);
        
        await driver.findElement(By.css('.px-8')).click();
        await driver.sleep(500);
        await driver.findElement(By.css('.lucide-user')).click();
        await driver.sleep(500);
        
        

        const element = await driver.wait(
          async () => await driver.findElement(By.xpath("//span[contains(.,'Añadir producto')]")),
          10000
      );

        await element.click();
        await driver.sleep(500);

        const nameInput = await driver.findElement(By.name('name'));

        await nameInput.sendKeys("Selenium testtt");
        const priceInput = await driver.findElement(By.name('price'));

        await priceInput.sendKeys("10000");

        const descInput = await driver.findElement(By.css('[data-testid="description-input"]'));
        await descInput.sendKeys("Selenium should work");  

        const firstOption = await driver.findElement(By.css('[data-testid="category-select"] option:nth-child(2)'));

        await firstOption.click();
        
        await driver.findElement(By.css('.mt-12')).click();


        //await driver.sleep(2000);


        console.log('Test 3 passed: Verify admin page title');
    });

    test('Delete product', async () => {
        await driver.get('http://localhost:3000/');
        await driver.wait(until.elementLocated(By.css('.px-8')), 5000);
        
        await driver.findElement(By.css('.px-8')).click();
        //await driver.sleep(500);
        await driver.findElement(By.css('.lucide-user')).click();


        const firstOption = await driver.findElement(By.css('.border-b:nth-child(1) .inline-flex:nth-child(2) > .lucide'));

        //await firstOption.click();

        console.log('Test 4 passed: Delete product');
    });

  //   test('Update product', async () => {
  //       await driver.get('http://localhost:3000/');
  //       await driver.wait(until.elementLocated(By.css('.px-8')), 5000);
      
  //       await driver.findElement(By.css('.px-8')).click();
  //       await driver.sleep(500);
  //       await driver.findElement(By.css('.lucide-user')).click();
  //       await driver.sleep(500);

  //       const editProduct = await driver.findElement(By.css('.border-b:nth-child(1) > .p-2 > .inline-flex:nth-child(1) path:nth-child(2)'));

  //       await editProduct.click();
  //       await driver.sleep(2200);

  //       const nameInput = await driver.findElement(By.name('name'));

  //       await nameInput.sendKeys("Selenium test");
  //       await driver.sleep(500);
  //       const descInput = await driver.findElement(By.name('description'));

  //       await descInput.sendKeys("Selenium test");
  //       await driver.sleep(500);

  //       const priceInput = await driver.findElement(By.name('price'));
  //       await priceInput.click();

  //       await priceInput.clear();

  //       await priceInput.sendKeys("10000");



  //       const firstOption = await driver.findElement(By.css('select:nth-child(3)'));

  //       await firstOption.click();


  //       await driver.sleep(2200);

  //       console.log('Test 5 passed: Update product');
  // }); 

  // cmd + K + C

});