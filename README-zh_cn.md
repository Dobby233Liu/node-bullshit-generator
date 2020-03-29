# node-bullshit-generator

[en_*](README.md) | [zh_cn](README-zh_cn.md)

用于生成狗屁的 node.js 库 + 程序。

A.K.A. 给 node.js 用的 http://github.com/menzi11/BullshitGenerator

# 食用方法
## 库（“狗屎库”）方式

**注意：** 目前狗屎库在 `new` 后提供不了任何函数，如果意帮忙，请提交 PR。（如果要我做，重组的时候再说吧。）

用任意方法安装狗屎库，此处略。（还没在 npm 上发布~咕了~）

加载本库后，会有一个函数：
```javascript
生成狗屁(主题 = "学生会退会", 文章长度 = 6000 * 主题.length, 名人名言 = require("./dict/default/名人名言.js"), 废话 = require("./dict/default/废话.js")(主题),
	前面垫话 = require("./dict/default/前面垫话.js"),
	后面垫话 = require("./dict/default/后面垫话.js"),
	选项 = [omitted in this README] )
```
随意配置参数调用即可。

*TODO：给参数做文档。<s>但是咕了</s>*
## 程序方式

```
bullshit-generator [theme] [length] [options]
[theme] = 狗屎主题（字符串）
[length] = 狗屎长度。需要非负数自然数，否则忽略。
随意添加 -h（或 --help）命令行选项以显示英文版帮助
```

# 许可证

```
This program is licensed using the Anti 996 License, version 1.0 (draft),
inheriting the upstream's license.
Obtain a copy at https://github.com/996icu/996.ICU/blob/617129b/LICENSE
本程序继承上流的许可证，使用反996许可证版本1.0授权。
到 https://github.com/996icu/996.ICU/blob/def6413/LICENSE_CN 去看全文

THE LICENSED WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN ANY WAY CONNECTION WITH THE
LICENSED WORK OR THE USE OR OTHER DEALINGS IN THE LICENSED WORK.
该授权作品是"按原样"提供，不做任何明示或暗示的保证，包括但不限于对适销性、
特定用途适用性和非侵权性的保证。在任何情况下，无论是在合同诉讼、侵权诉讼
或其他诉讼中，版权持有人均不承担因本软件或本软件的使用或其他交易而产生、
引起或与之相关的任何索赔、损害或其他责任。
```