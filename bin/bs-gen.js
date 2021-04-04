#!/usr/bin/env node

/*
 * bullshit-generator / bs-gen
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */
var helpText = `bullshit-generator: Generates random Chinese bullshit.
This is a work-in-progress help document.

Parameters: bullshit-generator [theme] [length] [options]
[theme] = Article/bullshit theme, as a string.
[length] = Bullshit length. Must be a positive integer, or the value is ignored.
You can also specify a "-h" or "--help" in place of anywhere to display a help message (this)

Source code can be found at https://github.com/Dobby233Liu/node-bullshit-generator

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

This is a Node.js port of https://github.com/menzi11/BullshitGenerator`
var argvClean = process.argv.map((x) => x.trim()
    .toLowerCase())
var theme, length, library, article;
if (argvClean.indexOf("--help") >= 0 || argvClean.indexOf("-h") >= 0) {
    console.log(helpText);
    process.exit(1);
} else {
    theme = process.argv[2] || "学生会退会";
    length = argvClean[3] ? argvClean[3] >= 0 && parseInt(argvClean[3]) : undefined;
    library = new(require("../lib/狗屁库.js"))();
    article = library.生成(theme, length);
    console.log(article);
}