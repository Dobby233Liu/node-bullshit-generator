/*
 * libBullshit / 狗屁库
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */
class 狗屁库 {
    defaultOpts = {
        "分支大于24时加废话": false,
        "检测到底应该如何和又会如何产生": true,
        "有概率不添加后面垫话": false,
        "有时不加废话": true,
        "之前处理过废话的话不要处理名言": true,
        "LCG随机数机": false, // alert: broken. using this with the shuffle function may pop a item to NaN
        "v3语法改进": true,
        "menzi11#175": true /**, "menzi11#175-2": true (implemented by v3语法改进)**/
    }
    常用 = require("./常用");
    随机常用 = require("./随机常用");
    随机常用Exchanged = {};
    LCG = {};
    initXuanXiang(选项) {
        if(选项.LCG随机数机) this.LCG = new (require("./LCG中介"))();
        if(选项["menzi11#175"]) {
            this.下一句前面垫话 = this.随机常用Exchanged.洗牌(this.前面垫话);
            this.下一句后面垫话 = this.随机常用Exchanged.洗牌(this.后面垫话);
            this.下一句前面垫话到哪儿了 = 0;
            this.下一句后面垫话到哪儿了 = 0;
        }
    }
    生成(主题 = "学生会退会", 文章长度 = 6000 * 主题.length, 名人名言 = require("./dict/default/名人名言"), 废话 = require("./dict/default/废话")(主题), 前面垫话 = require("./dict/default/前面垫话.js"), 后面垫话 = require("./dict/default/后面垫话"), _选项 = this.defaultOpts) {
        this.选项 = this.常用.合并对象(this.defaultOpts, _选项);
        this.随机常用Exchanged = new this.随机常用((this.选项.LCG随机数机 ? this.LCG.来个小小数 : Math.random));
        this.前面垫话 = 前面垫话;
        this.后面垫话 = 后面垫话;
        this.initXuanXiang(this.选项);
        this.下一句废话 = this.随机常用Exchanged.洗牌(废话);
        this.下一句废话到哪儿了 = 0;
        this.下一句名人名言 = this.随机常用Exchanged.洗牌(名人名言);
        this.下一句名人名言到哪儿了 = 0;
        this.名人名言 = 名人名言;
        let tmp2 = "";
        let tmp = "    ";
        let sctStart = tmp;
        let 曾处理过废话 = false; // unused when opts.之前处理过废话的话不要处理名言 == !true
        // if(this.选项["menzi11#175-2"]) var 刚开一行 = false;
        var 分支 = 0; // quick fix
        maketmp: while(tmp.length < 文章长度 || (this.选项.v3语法改进 ? (tmp.trim().endsWith("：") || tmp.trim().endsWith(":") || tmp.trim().endsWith(",") || tmp.trim().endsWith("，")) : false)) {
            分支 = Math.floor((this.选项.LCG随机数机 ? this.LCG.来个小小数() : Math.random()) * 100);
            if(分支 < 5 && (this.选项.v3语法改进 ? (!tmp.endsWith(sctStart) && !tmp2.trim().endsWith(",") && !tmp2.trim().endsWith("，")) : true)) {
                // console.log("i DID do eol");
                tmp2 = this.另起一段((this.选项.v3语法改进 ? this.常用.能否以句号结束(tmp2.trim()) : true));
                if(this.选项.之前处理过废话的话不要处理名言) {
                    曾处理过废话 = false;
                }
            } else if(分支 < 20) {
                if((this.选项.之前处理过废话的话不要处理名言) ? 曾处理过废话 : false) {
                    continue maketmp;
                }
                tmp2 = this.来点名人名言();
                if(this.选项.之前处理过废话的话不要处理名言) {
                    曾处理过废话 = false;
                }
            }
            else if((this.选项.分支大于24时加废话 ? 分支 > 24 : true) && (this.选项.有时不加废话 ? !((Math.floor((this.选项.LCG随机数机 ? this.LCG.来个小小数() : Math.random())) * 80) & 7 == 0) : true)) {
                tmp2 = this.下一句废话[this.下一句废话到哪儿了].replace(/x/g, 主题);
                if(this.下一句废话.length - 1 == this.下一句废话到哪儿了) { // todo: 这算 v3语法改进吗？
                    this.下一句废话 = this.随机常用Exchanged.洗牌(废话); // 不够，再洗一下
                    this.下一句废话到哪儿了 = 0;
                }
                else this.下一句废话到哪儿了++;
                if((this.选项.检测到底应该如何和又会如何产生 ? tmp2.indexOf("到底应该如何") >= 0 || tmp2.indexOf("又会如何产生") >= 0 : false) && Math.floor((this.选项.LCG随机数机 ? this.LCG.来个小小数() : Math.random()) * 3) == 2) tmp2 = tmp2.replace(/。/g, "？");
                if(this.选项.之前处理过废话的话不要处理名言) {
                    曾处理过废话 = true;
                }
            } else {
                continue maketmp;
            }
            tmp += tmp2 //.trim();
            //tmp = tmp//.trim();
        }
        tmp = "    " + tmp.trim();
        this.initXuanXiang(this.选项);
        this.下一句废话到哪儿了 = 0;
        this.下一句名人名言到哪儿了 = 0;
        return tmp;
    }
    来点名人名言() {
        let xx = this.下一句名人名言[this.下一句名人名言到哪儿了];
        xx = xx.replace(/a/, (this.选项["menzi11#175"] ? this.下一句前面垫话[this.下一句前面垫话到哪儿了] : this.随机常用Exchanged.瞎选一个(this.前面垫话)));
        if((this.选项.有概率不添加后面垫话 ? Math.floor((this.选项.LCG随机数机 ? this.LCG.来个小小数() : Math.random()) * 10) == 3 : true)) {
            xx = xx.replace(/b/, (this.选项["menzi11#175"] ? this.下一句后面垫话[this.下一句后面垫话到哪儿了] : this.随机常用Exchanged.瞎选一个(this.后面垫话)));
        } else {
            xx = xx.replace(/b/, "");
        }
        if(this.下一句名人名言.length - 1 == this.下一句名人名言到哪儿了) {
            this.选项.v3语法改进 && (this.下一句名人名言 = this.随机常用Exchanged.洗牌(this.名人名言));
            this.下一句名人名言到哪儿了 = 0;
        }
        else this.下一句名人名言到哪儿了++;
        if(this.选项["menzi11#175"]) {
            if(this.下一句前面垫话.length - 1 == this.下一句前面垫话到哪儿了) {
                this.选项.v3语法改进 && (this.下一句前面垫话 = this.随机常用Exchanged.洗牌(this.前面垫话));
                this.下一句前面垫话到哪儿了 = 0;
            }
            else this.下一句前面垫话到哪儿了++;
            if(this.下一句后面垫话.length - 1 == this.下一句后面垫话到哪儿了) {
                this.选项.v3语法改进 && (this.下一句后面垫话 = this.随机常用Exchanged.洗牌(this.后面垫话));
                this.下一句后面垫话到哪儿了 = 0;
            }
            else this.下一句后面垫话到哪儿了++;
        }
        return xx;
    }
    另起一段(以句号结束) {
        return (以句号结束 ? "。" : "") + "\n" + "    ";
    }
    constructor() {}
}
module.exports = 狗屁库;
