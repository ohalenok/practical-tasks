let BaseControl = require('./base_control')

class Errors extends BaseControl {
  constructor (protractorElement, controlName) {
    super (protractorElement, controlName)
  }

  async isDisplayed () {
    return this.protractorElement.isDisplayed()
  }
}

module.exports = Errors
