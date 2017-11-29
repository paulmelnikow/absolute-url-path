'use strict'

const { URL } = require('./url-api')

class URLPath extends URL {
  static bogusify(url) {
    if (!url) {
      return 'bogus:///'
    } else if (url.startsWith('/')) {
      return `bogus://${url}`
    } else {
      return `bogus:///${url}`
    }
  }

  static debogusify(url) {
    const bogus = 'bogus://'

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

  get protocol() {
    return this.isBogus ? '' : super.protocol
  }
  get port() {
    return this.isBogus ? '' : super.port
  }
  get host() {
    return this.isBogus ? '' : super.host
  }
  get hostname() {
    return this.isBogus ? '' : super.hostname
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
