[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Dobby233Liu/node-bullshit-generator) 

# node-bullshit-generator

[en_us](README.md) | [zh_cn](README-zh_cn.md)

A Node.js library & program that generates meaningless Chinese bullshit when ran.

Basically it's http://github.com/menzi11/BullshitGenerator but for Node.js.

# Usage
## As a library ("libBullshit")

If you're installing the library using `npm`, the package is `@lwys-pkg-releaser/node-bullshit-generator`, and you get it.

For browsers the library should be in `/dist/狗屁库(.min).js`, that includes the library itself and the `default` dict.
TODO CDN

The library gives a class to you (`window.libBullshit` in browser; `require` users should know where to find it). There should be a function inside after you construct it:
```javascript
this.生成(主题 = "学生会退会", 文章长度 = 6000 * 主题.length, 名人名言 = require("./dict/default/名人名言.js"), 废话 = require("./dict/default/废话.js")(主题),
	前面垫话 = require("./dict/default/前面垫话.js"),
	后面垫话 = require("./dict/default/后面垫话.js"),
	_选项 = /* omitted */ )
```
Simply call the function with the parameters you would like to supply.

*todo: Document the parameters. <s>I am so lazy so do this far later.</s>*

## As a simple app

```
bullshit-generator [theme] [length] [options]
[theme] = Article/bullshit theme, as a string.
[length] = Bullshit length. Must be a positive integer, or the value is ignored.
You can also specify a "-h" or "--help" in place of anywhere to display a help message
```

## As a (Chinese) web page
https://Dobby233Liu.github.io/node-bullshit-generator

Note: It uses the master version with the `default` dict.

# License

```
This program is licensed using the Anti 996 License, version 1.0 (draft),
inheriting the upstream's license.
Obtain a copy at https://github.com/996icu/996.ICU/blob/617129b/LICENSE

THE LICENSED WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN ANY WAY CONNECTION WITH THE
LICENSED WORK OR THE USE OR OTHER DEALINGS IN THE LICENSED WORK.
```
