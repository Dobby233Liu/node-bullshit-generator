# node-bullshit-generator

A node library & program that generates meaningless Chinese bullshit when ran.

A.K.A. http://github.com/menzi11/BullshitGenerator but for Node.js.

# Usage - as a library

**Note:** Currently, `node-bullshit-generator` *doesn't* expose anything to your script. You submit a Pull Request if youre willing to help.

Install the library by any way.

After you `require` the library, you got a function:
`生成狗屁(主题 = "学生会退会", 文章长度 = 6000 * 主题.length, 名人名言 = require("./dict/default/名人名言.js"), 废话 = require("./dict/default/废话.js")(主题),
	前面垫话 = require("./dict/default/前面垫话.js"),
	后面垫话 = require("./dict/default/后面垫话.js"),
	选项 = { "分支大于24时加废话": false, "检测到底应该如何和又会如何产生": true, "有概率不添加后面垫话": false, "有时不加废话": true, "之前处理过废话的话不要处理名言": true, "LCG随机数机": true, "v3语法改进": true} )`
Simply call the function with the parameters you would like to supply.

*todo: Document the parameters. <s>I am so lazy so do this far later.</s>*

# Usage - as a simple app

```
bullshit-generator [theme] [length] [options]
[theme] = Article/bullshit theme, as a string.
[length] = Bullshit length. Must be a integer.
[options] = More options to the generator. If specified, must be a parsable JSON.
You can also specify a "-h" or "--help" in place of anywhere to display a help message
```

# License

```
This program is licensed using Anti 996 License, version 1.0 (draft). Obtain a copy at https://github.com/996icu/996.ICU/blob/617129b/LICENSE

THE LICENSED WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN ANY WAY CONNECTION WITH THE
LICENSED WORK OR THE USE OR OTHER DEALINGS IN THE LICENSED WORK.
```
