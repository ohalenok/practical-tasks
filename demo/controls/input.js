let BaseControl = require('./base_control')

class Input extends BaseControl {
  constructor (protractorElement, controlName) {
    super (protractorElement, controlName)
  }

  async sendKeys (text) {
    return this.protractorElement.sendKeys(text)
  }
}

module.exports = Input;