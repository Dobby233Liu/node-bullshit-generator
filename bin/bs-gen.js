/* orig py program: menzi11 https://github.com/menzi11/BullshitGenerator/blob/master/%E8%87%AA%E5%8A%A8%E7%8B%97%E5%B1%81%E4%B8%8D%E9%80%9A%E6%96%87%E7%AB%A0%E7%94%9F%E6%88%90%E5%99%A8.py
 * node.js port:	Dobby233Liu 2019/11/15 first broken version
 *			   					2020/01/14 v2
 * formatted by:	https://beautifier.io/
*/
var 生成狗屁 = require("../lib/狗屁库.js");
if(process.argv.length - 1 < 2) {
    console.log("error: argv[2] as theme");
} else {
    console.log(生成狗屁(process.argv[2]));
}