/*
 * libBullshit / 狗屁库
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */
var defaultOpts = {
    "分支大于24时加废话": false,
    "检测到底应该如何和又会如何产生": true,
    "有概率不添加后面垫话": false,
    "有时不加废话": true,
    "之前处理过废话的话不要处理名言": true,
    "LCG随机数机": true,
    "v3语法改进": true,
    "menzi11#175": false /**, "menzi11#175-2": true (implemented by v3语法改进)**/
};

function 生成狗屁(主题 = "学生会退会", 文章长度 = 6000 * 主题.length, 名人名言 = require("./dict/default/名人名言.js"), 废话 = require("./dict/default/废话.js")(主题), 前面垫话 = require("./dict/default/前面垫话.js"), 后面垫话 = require("./dict/default/后面垫话.js"), _选项 = defaultOpts) {
    var LCG;
    if(选项.LCG随机数机) LCG = new(require("./LCG中介.js"))();
    var 合并对象 = function (much, less) {
        var aPhoenixGraveSNewBirth = {};
        for(i in much) {
            // “如果老婆跟我意见相同“... (same NaN or same as told by == or === op)
            if((isNaN(much[i]) && isNaN(less[i])) || (isNaN(less[i]) && isNaN(much[i])) || much[i] == less[i] || much[i] === less[i]) {
                // “听老婆的”
                aPhoenixGraveSNewBirth[i] = much[i];
            } else if(less[i]) {
                // “不然听我的，如果有的话”
                aPhoenixGraveSNewBirth[i] = less[i];
            } else {
                // “还不然就听老婆的”
                aPhoenixGraveSNewBirth[i] = much[i];
            }
        }
        for(i in less) {
            if(!aPhoenixGraveSNewBirth[i]) { // extra: add props that "less" has but not "much"
                aPhoenixGraveSNewBirth[i] = less[i];
            }
        }
        return aPhoenixGraveSNewBirth;
    };
    var 选项 = 合并对象(defaultOpts, _选项); // “婚姻方程式：0.5+0.5=1，互补” Now we wouldn't need to explicitly define defaults in the function tree!!! Hooray!!!
    /**
     * @param {Array} 数组
     */
    var 洗牌 = function (数组) { // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        for(let i = 数组.length - 1; i > 0; i--) {
            const j = Math.floor((选项.LCG随机数机 ? LCG.来个小小数() : Math.random()) * (i + 1));
            [数组[i], 数组[j]] = [数组[j], 数组[i]];
        }
        return 数组;
    }
    var 瞎选一个 = function (数组) {
        let max = 数组.length;
        let min = 0;
        return 数组[Math.floor((选项.LCG随机数机 ? LCG.来个小小数() : (选项.LCG随机数机 ? LCG.来个小小数() : Math.random())) * (max - min)) + min];
    }
    var 下一句废话 = 洗牌(废话);
    var 下一句废话到哪儿了 = 0;
    var 下一句名人名言 = 洗牌(名人名言);
    var 下一句名人名言到哪儿了 = 0;
    if(选项["menzi11#175"]) {
        var 下一句前面垫话 = 洗牌(前面垫话);
        var 下一句后面垫话 = 洗牌(后面垫话);
        var 下一句前面垫话到哪儿了 = 0;
        var 下一句后面垫话到哪儿了 = 0;
    }
    var 来点名人名言 = function () {
        let xx = 下一句名人名言[下一句名人名言到哪儿了];
        xx = xx.replace(/a/, (选项["menzi11#175"] ? 下一句前面垫话[下一句前面垫话到哪儿了] : 瞎选一个 /**random.choice**/(前面垫话)));
        if((选项.有概率不添加后面垫话 ? Math.floor((选项.LCG随机数机 ? LCG.来个小小数() : Math.random()) * 10) == 3 : true)) {
            xx = xx.replace(/b/, (选项["menzi11#175"] ? 下一句后面垫话[下一句后面垫话到哪儿了] : 瞎选一个(后面垫话)))
        } else {
            xx = xx.replace(/b/, "")
        }
        if(下一句名人名言.length - 1 == 下一句名人名言到哪儿了) {
            选项.v3语法改进 && (下一句名人名言 = 洗牌(名人名言));
            下一句名人名言到哪儿了 = 0;
        }
        else 下一句名人名言到哪儿了++;
        if(选项["menzi11#175"]) {
            if(下一句前面垫话.length - 1 == 下一句前面垫话到哪儿了) {
                选项.v3语法改进 && (下一句前面垫话 = 洗牌(前面垫话));
                下一句前面垫话到哪儿了 = 0;
            }
            else 下一句前面垫话到哪儿了++;
            if(下一句后面垫话.length - 1 == 下一句后面垫话到哪儿了) {
                选项.v3语法改进 && (下一句后面垫话 = 洗牌(后面垫话));
                下一句后面垫话到哪儿了 = 0;
            }
            else 下一句后面垫话到哪儿了++;
        }
        return xx
    }
    var 另起一段 = function (以句号结束) {
        return (以句号结束 ? "。" : "") + "\n" + "    "
    }
    var 生成 = function () {
        let tmp2 = "";
        let tmp = "    ";
        let sctStart = tmp;
        if(选项.之前处理过废话的话不要处理名言) var 曾处理过废话 = false;
        // if(选项["menzi11#175-2"]) var 刚开一行 = false;
        var 能否以句号结束 = (tmp2) => !tmp2.endsWith("。") && !tmp2.endsWith(".") && !tmp2.endsWith("：") && !tmp2.endsWith(":") && !tmp2.endsWith("？") && !tmp2.endsWith("?") && !tmp2.endsWith("！") && !tmp2.endsWith("!") && !tmp2.endsWith(",") && !tmp2.endsWith("，");
        maketmp: while(tmp.length < 文章长度) {
            分支 = Math.floor((选项.LCG随机数机 ? LCG.来个小小数() : Math.random()) * 100);
            if(分支 < 5 && (选项.v3语法改进 ? (!tmp.endsWith(sctStart) && !tmp2.endsWith(",") && !tmp2.endsWith("，")) : true)) {
                tmp2 = 另起一段((选项.v3语法改进 ? 能否以句号结束(tmp2.trim()) : true));
                if(选项.之前处理过废话的话不要处理名言) 曾处理过废话 = false;
            } else if(分支 < 20) {
                if((选项.之前处理过废话的话不要处理名言) ? 曾处理过废话 : false) {
                    continue maketmp;
                }
                tmp2 = 来点名人名言();
                if(选项.之前处理过废话的话不要处理名言) 曾处理过废话 = false;
            }
            else if((选项.分支大于24时加废话 ? 分支 > 24 : true) && (选项.有时不加废话 ? !((Math.floor((选项.LCG随机数机 ? LCG.来个小小数() : Math.random())) * 80) & 7 == 0) : true)) {
                tmp2 = 下一句废话[下一句废话到哪儿了].replace(/x/g, 主题);
                if(下一句废话.length - 1 == 下一句废话到哪儿了) { // todo: 这算 v3语法改进吗？
                    下一句废话 = 洗牌(废话); // 不够，再洗一下
                    下一句废话到哪儿了 = 0;
                }
                else 下一句废话到哪儿了++;
                if((选项.检测到底应该如何和又会如何产生 ? tmp2.indexOf("到底应该如何") >= 0 || tmp2.indexOf("又会如何产生") >= 0 : false) && Math.floor((选项.LCG随机数机 ? LCG.来个小小数() : Math.random()) * 3) == 2) tmp2 = tmp2.replace(/。/g, "？");
                if(选项.之前处理过废话的话不要处理名言) 曾处理过废话 = true;
            } else {
                continue maketmp;
            }
            tmp += tmp2;
        }
        tmp = "    " + tmp.trim();
        while(选项.v3语法改进 && (tmp.trim().endsWith("：") || tmp.trim().endsWith(":") || tmp.trim().endsWith(",") || tmp.trim().endsWith("，"))) {
            if(下一句废话.length - 1 == 下一句废话到哪儿了) { // todo: 这算 v3语法改进吗？
                下一句废话 = 洗牌(废话); // 不够，再洗一下
                下一句废话到哪儿了 = 0;
            }
            tmp += 下一句废话[下一句废话到哪儿了].replace("x", 主题);
            下一句废话到哪儿了++;
        }
        return tmp;
    }
    return 生成();
}
module.exports = 生成狗屁;