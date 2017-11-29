'use strict'

const { test: sazeracTest, forCases, given } = require('sazerac')
const URLPath = require('..')

const makeHref = (url, baseUrl) => new URLPath(url, baseUrl).href

describe('URLPath', function() {
  sazeracTest(makeHref, () => {
    forCases([
      given('/foo/bar'),
      given('/foo/bar', '/'),
      given('/foo/bar', '/baz'),
      given('/foo/bar', '/baz/'),
    ]).expect('/foo/bar')

    given('foo/bar', '/baz/').expect('/baz/foo/bar')

    forCases([
      given('http://foo/bar'),
      given('bar', 'http://foo/'),
      given('/bar', 'http://foo/'),
    ]).expect('http://foo/bar')
  })
})
