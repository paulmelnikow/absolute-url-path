'use strict'

const { test: sazeracTest, forCases, given } = require('sazerac')
const AbsolutePath = require('..')

const makeHref = (url, baseUrl) => new AbsolutePath(url, baseUrl).href

describe('AbsolutePath', function() {
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
