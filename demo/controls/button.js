let BaseControl = require('./base_control')

class Button extends BaseControl {
  constructor (protractorElement, controlName) {
    super (protractorElement, controlName)
  }

  async isEnabled () {
    return this.protractorElement.isEnabled()
  }
}

module.exports = Button
