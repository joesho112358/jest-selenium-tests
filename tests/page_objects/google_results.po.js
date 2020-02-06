const {By} = require('selenium-webdriver');

class GoogleResults {

  constructor(driver) {
    this.browser = driver;
  }

  search_text() {
    return this.browser.findElement(By.id('search')).getText();
  }
};

module.exports = GoogleResults;
