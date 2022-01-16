# Included Dictionaries

There are multiple dicts that comes with `node-bullshit-generator`.
To use them, you need to `require` their configuration files and pass it to the `生成` function, like:
```javascript
const dict = require("@lwys-pkg-releaser/node-bullshit-generator/src/dict/{codename}/配置.js");
bullshit.生成("coding", 3000, dict);
```

## Default

* Codename: `default`
* Source: https://github.com/menzi11/BullshitGenerator/blob/master/data.json (with some modifications)

The default dict, used if none is specified. Slightly improved version of the `classic` dict.

## Classic

* Codename: `classic`
* Source: https://github.com/menzi11/BullshitGenerator/blob/master/data.json

Almost accurate to the original dict in the original `BullshitGenerator`.

**Tip:** Disable `v3语法改进` to make the result even more close to it.

## Default Plus

* Codename: `default-plus`
* Sources:
  * https://github.com/menzi11/BullshitGenerator/pull/110
  * https://github.com/aetherwu (LOST)
  * https://github.com/menzi11/BullshitGenerator/pull/107
  * https://github.com/menzi11/BullshitGenerator/pull/209
  * https://github.com/qwas982 (his quotes can be disabled)
  * https://github.com/menzi11/BullshitGenerator/pull/175
  * Dobby233Liu's scrapped modifications of the `default` dict

`default`, with more exciting stuff packed.
It is recommended to use compotents to this dict in your own dict configurations, rather than just using the pre-made configuration.

## Chinese Internet Industry Terms

* Codename: `internet-industry-terms`
* Source: https://github.com/shadowings-zy/internet-industry-terms-generator/blob/master/index.js

A compliation of random confusing terms that Chinese internet industry people use, for some reason.

## English Dict

* Codename: `english`
* Source: Heavliy modified version of https://github.com/JIUYANGZH/BullshitGenerator-English/blob/master/bullshitgenerator_English/bullshit_generator.csv

Near-perfect translation of the `classic` dict to English. Relys on the `` option being enabled a lot.

## Japanese Dict

* Codename: `japanese`
* Source: https://github.com/garily/BullshitGenerator-Japanese/blob/master/index.html

Near-perfect translation of the `classic` dict to Japanese.

## qwas982

* Codename: `qwas982`
* Source: https://github.com/qwas982

Compilation of some infamous quotes fron the infamous Hanzi-based programming language pionner qwas982.
