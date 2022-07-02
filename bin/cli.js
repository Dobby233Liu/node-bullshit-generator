#!/usr/bin/env node

/**
 * bullshit-generator (CLI)
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */

let helpText = `Generates random Chinese bullshit.

bullshit-generator [theme] [length] [dict]
    theme: Article/bullshit theme (string)
    length: Article/bullshit length (must be a positive integer)
    dict: Path leading to a "dict config" file. Export must be a object.
You can also specify a "-h" or "--help" parameter in place of anywhere to display this help message

The source code can be found at https://github.com/Dobby233Liu/node-bullshit-generator

This program is licensed under the Anti 996 License, version 1.0 (draft).
See https://github.com/996icu/996.ICU/blob/617129b/LICENSE`;

let argvClean = process.argv.map((x) => x.trim().toLowerCase());
let theme, length, library, dict, article;
if (argvClean.indexOf("--help") >= 0 || argvClean.indexOf("-h") >= 0) {
    console.log(helpText);
    process.exit(1);
} else {
    theme = process.argv[2] || "学生会退会";
    length = argvClean[3]
        ? argvClean[3] >= 0 && parseInt(argvClean[3])
        : undefined;
    dict = require(process.argv[4]
        ? process.argv[4]
        : "../lib/dict/default/配置");

    library = new (require(".."))();
    article = library.生成(theme, length, dict);

    console.log(article);
}
