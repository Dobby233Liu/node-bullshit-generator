#!/usr/bin/env node
/* orig py program: menzi11 https://github.com/menzi11/BullshitGenerator/blob/master/%E8%87%AA%E5%8A%A8%E7%8B%97%E5%B1%81%E4%B8%8D%E9%80%9A%E6%96%87%E7%AB%A0%E7%94%9F%E6%88%90%E5%99%A8.py
 * node.js port:	Dobby233Liu 2019/11/15 first broken version
 *			   					2020/01/14 v2
 * formatted by:	https://beautifier.io/
*/
var helpText = `bullshit-generator: Generates random Chinese bullshit.
This is a work-in-progress help document.

Parameters: bullshit-generator [theme] [length] [options]
[theme] = Article/bullshit theme, as a string.
[length] = Bullshit length. Must be a integer.
[options] = More options to the generator. If specified, must be a parsable JSON.
You can also specify a "-h" or "--help" in place of anywhere to display a help message (this)

Source code can be found at https://github.com/Dobby233Liu/node-bullshit-generator

This program is licensed using the Anti 996 License, version 1.0 (draft).
Obtain a copy at https://github.com/996icu/996.ICU/blob/617129b/LICENSE
THE LICENSED WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN ANY WAY CONNECTION WITH THE
LICENSED WORK OR THE USE OR OTHER DEALINGS IN THE LICENSED WORK.

This is a Node.js port of https://github.com/menzi11/BullshitGenerator`
var argvClean = process.argv.map((x)=>x.trim().toLowerCase())
if(argvClean.indexOf("--help") >= 0 || argvClean.indexOf("-h") >= 0) {
	console.log(helpText)
} else {
	var 生成狗屁 = require("../lib/狗屁库.js");
	console.log(生成狗屁(process.argv[2],parseInt(process.argv[3]),undefined,undefined,undefined,undefined,process.argv[4]&&JSON.stringify(process.argv[4])));
}