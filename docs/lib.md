# Library Usage

## Installing the Library

This package can be installed through `npm`, like this:

```bash
npm install @lwys-pkg-releaser/node-bullshit-generator
```

After that, in Node.js code, you can `require` the main class of the library with:

```js
const Bullshit = require("@lwys-pkg-releaser/node-bullshit-generator");
```

For browsers, you can use the recommended bundled versions (`/dist/狗屁库(.min).js`), which only includes the library itself and the `default` dict.
You can also use unpkg or any other CDN to get this library, like:

```html
<script src="https://unpkg.com/@lwys-pkg-releaser/node-bullshit-generator"></script>
```

Now, the `Bullshit` (`window.bullshit` with the bundled version in a browser) variable should be populated with the 狗屁库 class. Construct it to get a generator instance:

```js
const bullshit = new Bullshit();
```

Now you can generate an article with:

```js
bullshit.生成();
```

## Using the Library

### Basic Usage

Usually, you just use the `生成` function.
Here's all of the parameters for it:

```js
生成(主题, 长度, 字典, 选项);
```

For example, passing `a` as `主题` produces the following text:

```
这样看来，这是不可避免的。我认为，a似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实。所谓a，关键是a需要如何写。带着这些问题，我们来审视一下a。到底应该如何实现a？生活中，若a出现了，我们就不得不考虑它出现了的事实。
...
```

`长度` is the length of the article. For example, when you put `8000`, the library will try to make the article 8000 characters long.

`字典` is a object that contains data that the library creates the article from.
You can use a premade `字典`, for example:

```js
const engDict = require("@lwys-pkg-releaser/node-bullshit-generator/src/dict/english/配置.js");
bullshit.生成("the world ending", 3000, engDict);
```

will produce an 3000 characters long article with the English dict, with "the world ending" as the theme.

`选项` is a object that contains configurations for the generation. You usually don't need to mess with it, but if you think you do, read the [Library Reference](libref.md) for all options.
