btnSaveLocator = '.section-title__details-actions .gds-btn-success'


class AddProductView {
  constructor () {}

  getSaveButton () {
    return element(by.css(btnSaveLocator))
  }

  async isSaveButtonVisible() {
    return this.getSaveButton().isDisplayed()
  }
}

module.exports = AddProductView
