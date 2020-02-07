const {By} = require('selenium-webdriver');

class GoogleResults {

  constructor(driver) {
    this.browser = driver;
  }

  search_text() {
    return this.browser.findElement(By.id('search')).getText();
  }

  first_link_text() {
    return this.browser.findElement(By.id('rso')).findElement(By.tagName("a")).getText();
  }

  first_link_href() {
    return this.browser.findElement(By.id('rso')).findElement(By.tagName("a")).getAttribute("href");
  }
};

module.exports = GoogleResults;
