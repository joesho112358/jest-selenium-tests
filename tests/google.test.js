const {Builder} = require('selenium-webdriver');
jest.setTimeout(60000)
const GoogleHome = require('./page_objects/google_home.po.js');
const GoogleResults = require('./page_objects/google_results.po.js');

describe("Googleing javascript", () => {
  let driver;

  beforeAll(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });
  
  test('Search for javascript', async () => {
    home_page = new GoogleHome(driver);
    results_page = new GoogleResults(driver);
    search_item = 'javascript';

    await driver.get(home_page.getUrl());
    await home_page.search(search_item);
    title = await driver.getTitle();
    text = await results_page.search_text();

    expect(title).toBe(search_item + ' - Google Search');
    expect(text).toContain(search_item);
  });
  
  test('First link is to js homepage', async () => {
    home_page = new GoogleHome(driver);
    results_page = new GoogleResults(driver);
    search_item = 'javascript';

    await driver.get(home_page.getUrl());
    await home_page.search(search_item);
    text = await results_page.first_link_text();
    href = await results_page.first_link_href();

    expect(text).toContain('JavaScript');
    expect(href).toBe('https://www.javascript.com/');
  });

});
