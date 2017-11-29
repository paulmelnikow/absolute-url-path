absolute-url-path
=================

Adaptation of the WHATWG URL API for absolute paths.

Works in Node 8 and browsers which support the URL API (or have a polyfill).

```js
const url = new AbsolutePath('/foo/bar')
url.searchParams.set('query', 'something')
return url.href
```

Installation
------------

Requires Node 8+.

```
npm install absolute-url-path
```


Contribute
----------

- Issue Tracker: https://github.com/paulmelnikow/absolute-url-path/issues
- Source Code: https://github.com/paulmelnikowabsolute-url-path/

Pull requests welcome!


Support
-------

If you are having issues, please let me know.


License
-------

The project is licensed under the MIT license.
