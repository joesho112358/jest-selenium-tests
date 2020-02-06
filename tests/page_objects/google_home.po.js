const {By, Key} = require('selenium-webdriver');

class GoogleHome {

  constructor(driver) {
    this.browser = driver;
    this.url = "https://www.google.com";
  }

  getUrl() {
    return this.url;
  }

  search(item) {
    return this.browser.findElement(By.name('q')).sendKeys(item, Key.RETURN);
  }
};

module.exports = GoogleHome;
