#!/usr/bin/env node

/**
 * bullshit-generator (CLI)
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */

const helpText = `Generates random Chinese bullshit.

bullshit-generator [theme] [length] [dict]
    theme: Article/bullshit theme (string)
    length: Article/bullshit length (must be a positive integer)
    dict: Path leading to a "dict config" file. Export must be a object.
You can also specify a "-h" or "--help" parameter in place of anywhere to display this help message

The source code can be found at https://github.com/Dobby233Liu/node-bullshit-generator

This program is licensed under the Anti 996 License, version 1.0 (draft).
See https://github.com/996icu/996.ICU/blob/617129b/LICENSE`;

let argvClean = process.argv.slice(2);
let theme, length, library, dict, article;
if (argvClean.indexOf("--help") >= 0 || argvClean.indexOf("-h") >= 0) {
    console.log(helpText);
    process.exit(1);
} else {
    theme = argvClean[0] || "学生会退会";
    length = argvClean[1]
        ? argvClean[1] >= 0 && parseInt(argvClean[1])
        : undefined;
    dict = require(argvClean[2] ? argvClean[2] : "../lib/dict/default/配置");

    library = new (require(".."))();
    article = library.生成(theme, length, dict);

    console.log(article);
}
