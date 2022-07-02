# Included Dictionaries

There are multiple dicts that comes with `node-bullshit-generator`.
To use them, you need to `require` their configuration files and pass it to the `生成` function, like:

```javascript
const dict = require("@lwys-pkg-releaser/node-bullshit-generator/lib/dict/{codename}/配置.js");
bullshit.生成("coding", 3000, dict);
```

## Default

-   Codename: `default`
-   Source: https://github.com/menzi11/BullshitGenerator/blob/master/data.json (with some modifications)

The default dict that is used if none is specified. It is a slightly improved version of the dict from the original Python version.

## Classic

-   Codename: `classic`
-   Source: https://github.com/menzi11/BullshitGenerator/blob/master/data.json

A recreation of the dict in the original Python `BullshitGenerator`.

**Tip:** Disable the `v3语法改进` option to make the output of the library closer to the original Python version.

## Default+

-   Codename: `default-plus`
-   Sources:
    -   https://github.com/menzi11/BullshitGenerator/pull/110
    -   A fork of the Python version by https://github.com/aetherwu (original repo can no longer be found)
    -   https://github.com/menzi11/BullshitGenerator/pull/107
    -   https://github.com/menzi11/BullshitGenerator/pull/209
    -   https://github.com/qwas982 (their quotes can be disabled)
    -   https://github.com/menzi11/BullshitGenerator/pull/175
    -   https://github.com/Windy-Dance/BullShitGenerator2.0
    -   https://github.com/Acfboy/BullshitGenerator/blob/master/data.json
    -   Dobby233Liu's scrapped modifications of the `default` dict

The Default dict, but with some _new and cool_ stuff inside.
It is recommended to use components in this dict in your own dict configurations, rather than just using the pre-made configuration.

## Chinese Internet Industry Terms

-   Codename: `internet-industry-terms`
-   Source: https://github.com/shadowings-zy/internet-industry-terms-generator/blob/master/index.js

A compliation of random confusing terms that Chinese IT people use, for some reason.

## English Translation

-   Codename: `english`
-   Source: Heavliy modified version of https://github.com/JIUYANGZH/BullshitGenerator-English/blob/master/bullshitgenerator_English/bullshit_generator.csv

This dict is based on a translation and fork of the `classic` dict to English. Relys on the `允许字典处理字符串` option being enabled a lot, also turns the theme into lower case by default. It is suggested that you set the `结段强制带标点符号` option to true while using this dict.

## Japanese Translation

-   Codename: `japanese`
-   Source: https://github.com/garily/BullshitGenerator-Japanese/blob/master/index.html

This dict is based on a translation of the `classic` dict to Japanese.

## qwas982

-   Codename: `qwas982`
-   Source: https://github.com/qwas982

Badly made dict with data based on some infamous quotes from the infamous Hanzi-based... Uh, no, "mandarin symbol" programming language pionner qwas982.

## License Notices

```
Copyright (c) 2019 meng ke and contributors
Copyright (c) 2019? aetherwu
Copyright (c) 2020-present Dobby233Liu
Copyright (c) 2020 PyBird/Windy-Dance
Copyright (c) 2020 Acfboy
Copyright (c) 2020 shadowings-zy

"Anti 996" License Version 1.0 (Draft)

Permission is hereby granted to any individual or legal entity
obtaining a copy of this licensed work (including the source code,
documentation and/or related items, hereinafter collectively referred
to as the "licensed work"), free of charge, to deal with the licensed
work for any purpose, including without limitation, the rights to use,
reproduce, modify, prepare derivative works of, distribute, publish
and sublicense the licensed work, subject to the following conditions:

1. The individual or the legal entity must conspicuously display,
without modification, this License and the notice on each redistributed
or derivative copy of the Licensed Work.

2. The individual or the legal entity must strictly comply with all
applicable laws, regulations, rules and standards of the jurisdiction
relating to labor and employment where the individual is physically
located or where the individual was born or naturalized; or where the
legal entity is registered or is operating (whichever is stricter). In
case that the jurisdiction has no such laws, regulations, rules and
standards or its laws, regulations, rules and standards are
unenforceable, the individual or the legal entity are required to
comply with Core International Labor Standards.

3. The individual or the legal entity shall not induce, suggest or force
its employee(s), whether full-time or part-time, or its independent
contractor(s), in any methods, to agree in oral or written form, to
directly or indirectly restrict, weaken or relinquish his or her
rights or remedies under such laws, regulations, rules and standards
relating to labor and employment as mentioned above, no matter whether
such written or oral agreements are enforceable under the laws of the
said jurisdiction, nor shall such individual or the legal entity
limit, in any methods, the rights of its employee(s) or independent
contractor(s) from reporting or complaining to the copyright holder or
relevant authorities monitoring the compliance of the license about
its violation(s) of the said license.

THE LICENSED WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN ANY WAY CONNECTION WITH THE
LICENSED WORK OR THE USE OR OTHER DEALINGS IN THE LICENSED WORK.
```

```
MIT License

Copyright (c) 2019 meng ke
Copyright (c) 2019 JIUYANGZH
Copyright (c) 2019 garily

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
