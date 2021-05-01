/*
 * libBullshit / 狗屁库
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */
class 狗屁库 {
    默认选项 = {
        "分支大于24时加废话": false,
        "有概率不添加后面垫话": false,
        "之前处理过废话的话不要处理名言": true,
        "v3语法改进": true,
        "menzi11#175": true /**, "menzi11#175-2": true (implemented by v3语法改进)**/
    }
    默认字典 = require("./dict/default/配置"); // obj with old params + 句号 etc.
    常用 = require("./常用");
    随机 = new(require("./随机常用"))(Math.random);
    生成(主题 = "学生会退会", 长度 = 6000 * 主题.length, _字典 = this.默认字典(主题), _选项 = this.默认选项) {
        this.选项 = this.常用.合并对象(this.默认选项, _选项);
        this.字典 = this.常用.合并对象(this.默认字典(主题), _字典);
        this.前面垫话 = this.字典.前面垫话;
        this.后面垫话 = this.字典.后面垫话;
        if (选项["menzi11#175"]) {
            this.下一句前面垫话 = this.随机.洗牌(this.字典.前面垫话);
            this.下一句后面垫话 = this.随机.洗牌(this.字典.后面垫话);
            this.下一句前面垫话到哪儿了 = 0;
            this.下一句后面垫话到哪儿了 = 0;
        }
        this.下一句废话 = this.随机.洗牌(this.字典.废话);
        this.下一句废话到哪儿了 = 0;
        this.下一句名人名言 = this.随机.洗牌(this.字典.名人名言);
        this.下一句名人名言到哪儿了 = 0;
        this.名人名言 = this.字典.名人名言;
        let 缓冲 = ""; // tmp2
        let 起段 = this.字典.起段; //"    "; // sctStart
        this.起段 = 起段;
        let 文章 = 起段; // tmp
        let 曾处理过废话 = false; // unused when opts.之前处理过废话的话不要处理名言 == !true
        var 分支 = 0;
        写文: while (文章.length < 长度 || (this.选项.v3语法改进 ? (文章.trim()
                .endsWith("：") || 文章.trim()
                .endsWith(":") || 文章.trim()
                .endsWith(",") || 文章.trim()
                .endsWith("，")) : false)) {
            分支 = Math.floor(Math.random() * 100);
            if (分支 < 5 && (this.选项.v3语法改进 ? (!文章.endsWith(起段) && !缓冲.trim()
                    .endsWith(",") && !缓冲.trim()
                    .endsWith("，")) : true)) {
                缓冲 = this.另起一段((this.选项.v3语法改进 ? this.常用.能否以句号结束(缓冲.trim()) : true));
                if (this.选项.之前处理过废话的话不要处理名言) {
                    曾处理过废话 = false;
                }
            } else if (分支 < 20) {
                if ((this.选项.之前处理过废话的话不要处理名言) ? 曾处理过废话 : false) {
                    continue 写文;
                }
                缓冲 = this.来点名人名言();
                if (this.选项.之前处理过废话的话不要处理名言) {
                    曾处理过废话 = false;
                }
            } else if ((this.选项.分支大于24时加废话 ? 分支 > 24 : true)) {
                缓冲 = this.下一句废话[this.下一句废话到哪儿了].replace(/x/g, 主题);
                if (this.下一句废话.length - 1 == this.下一句废话到哪儿了) { // todo: 这算 v3语法改进吗？
                    this.下一句废话 = this.随机.洗牌(this.字典.废话); // 不够，再洗一下
                    this.下一句废话到哪儿了 = 0;
                } else this.下一句废话到哪儿了++;
                if (this.选项.之前处理过废话的话不要处理名言) {
                    曾处理过废话 = true;
                }
            } else {
                continue 写文;
            }
            文章 += 缓冲;
        }
        文章 = 起段 + 文章.trim();
        return 文章;
    }
    来点名人名言() {
        let xx = this.下一句名人名言[this.下一句名人名言到哪儿了];
        xx = xx.replace(/a/, (this.选项["menzi11#175"] ? this.下一句前面垫话[this.下一句前面垫话到哪儿了] : this.随机.瞎选一个(this.前面垫话)));
        if (!(this.选项.有概率不添加后面垫话 ? Math.floor(Math.random() * 10) == 3 : true)) {
            xx = xx.replace(/b/, (this.选项["menzi11#175"] ? this.下一句后面垫话[this.下一句后面垫话到哪儿了] : this.随机.瞎选一个(this.后面垫话)));
        } else {
            xx = xx.replace(/b/, "");
        }
        if (this.下一句名人名言.length - 1 == this.下一句名人名言到哪儿了) {
            this.选项.v3语法改进 && (this.下一句名人名言 = this.随机.洗牌(this.名人名言));
            this.下一句名人名言到哪儿了 = 0;
        } else this.下一句名人名言到哪儿了++;
        if (this.选项["menzi11#175"]) {
            if (this.下一句前面垫话.length - 1 == this.下一句前面垫话到哪儿了) {
                this.选项.v3语法改进 && (this.下一句前面垫话 = this.随机.洗牌(this.前面垫话));
                this.下一句前面垫话到哪儿了 = 0;
            } else this.下一句前面垫话到哪儿了++;
            if (this.下一句后面垫话.length - 1 == this.下一句后面垫话到哪儿了) {
                this.选项.v3语法改进 && (this.下一句后面垫话 = this.随机.洗牌(this.后面垫话));
                this.下一句后面垫话到哪儿了 = 0;
            } else this.下一句后面垫话到哪儿了++;
        }
        return xx;
    }
    另起一段(以句号结束) {
        return (以句号结束 ? this.字典.句号 /**"。"**/ : "") + "\n" + this.起段 /**"    "**/ ;
    }
    constructor() {}
}
module.exports = 狗屁库;