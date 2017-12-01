'use strict'

const { URL } = require('./url-api')

class URLPath extends URL {
  static bogusify(url) {
    if (!url) {
      return 'bogus://bogushost/'
    } else if (url.startsWith('/')) {
      return `bogus://bogushost${url}`
    } else {
      return `bogus://bogushost/${url}`
    }
  }

  static debogusify(url) {
    const bogus = 'bogus://bogushost'

    // Confidence check.
    if (!url.startsWith(bogus)) {
      throw Error(`Expected absolute path ${url} to begin with ${bogus}`)
    }

    return url.substring(bogus.length)
  }

  constructor(url, baseUrl) {
    try {
      super(url, baseUrl)
      return
    } catch (e) {}

    super(url, URLPath.bogusify(baseUrl))
    this.isBogus = true
  }

  get href() {
    return this.isBogus ? this.constructor.debogusify(super.href) : super.href
  }

  toString() {
    return this.href
  }
  toJSON() {
    return this.href
  }
}

module.exports = URLPath
