# Library Usage

## Installing the Library

This package can be installed through `npm`.
```bash
npm install @lwys-pkg-releaser/node-bullshit-generator
```

After that, in Node.js code, you can require the library with:
```js
const Bullshit = require("@lwys-pkg-releaser/node-bullshit-generator")
```

For browsers, you can use the recommended bundled versions (`/dist/狗屁库(.min).js`), which only includes the library itself and the `default` dict.
You can also use unpkg or any other CDN to get this library, like: `https://unpkg.com/@lwys-pkg-releaser/node-bullshit-generator`.

Now, the `Bullshit` (`window.bullshit` with the bundled version in browser) variable should be populated with the 狗屁库 class. Construct it:
```js
const bullshit = new Bullshit()
```

Now you can use functions like:
```js
bullshit.生成()
```

## Using the library
