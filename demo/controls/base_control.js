class BaseControl {

  constructor (protractorElement, controlName) {
    this.protractorElement = protractorElement
    this.controlName = controlName
  }

  async click () {
    return this.protractorElement.click()
  }
}

module.exports = BaseControl