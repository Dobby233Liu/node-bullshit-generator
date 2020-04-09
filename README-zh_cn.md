# node-bullshit-generator

[en_*](README.md) | [zh_cn](README-zh_cn.md)

用于生成狗屁的 node.js 库 + 程序。

A.K.A. 给 node.js 用的 http://github.com/menzi11/BullshitGenerator
<hr /><!-- fixme(-2) -->
# 简便通知
LCG无法使用，因为使用那一个随机器洗牌可能会将一个元素洗到\#NaN。
# 食用方法
## 库（“狗屎库”）方式

用任意方法安装狗屎库，此处略。

**注：1.0.0（原0.0.8）的行为破坏了0.x的用法，旧版本的使用方法请看GitHub。请移到1.x的0.x使用者立即更改用法。**
加载本库后并 new 它以后，对象里应该会有一个函数：
```javascript
this.生成(主题 = "学生会退会", 文章长度 = 6000 * 主题.length, 名人名言 = require("./dict/default/名人名言.js"), 废话 = require("./dict/default/废话.js")(主题),
	前面垫话 = require("./dict/default/前面垫话.js"),
	后面垫话 = require("./dict/default/后面垫话.js"),
	_选项 = { 略: true } )
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
## 中文网页方式
https://Dobby233Liu.github.io/node-bullshit-generator

注：用的是 master 版的，提供者为 jsDelivr（可能有劫持！）

# 我将会对0.x停止支持
1.0.0发布以后我将停止支持0.x。请及时迁移。

# TODO
* https://github.com/aetherwu/BullshitGenerator/blob/master/data.json - 移植到 default-plus

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