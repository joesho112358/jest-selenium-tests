const {Builder, By, Key, until} = require('selenium-webdriver');
jest.setTimeout(60000)

describe("Google it", () => {
  let driver;

  beforeAll(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });
  
  test('Search google for javascript', async () => {
    await driver.get('http://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('kitty', Key.RETURN);
    title = await driver.getTitle();

    expect(title).toBe('kitty - Google Search'); // haha duh!
  });
});
