/*
 * libBullshit / 狗屁库
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */
class 狗屁库 {
    默认选项 = {
        "有概率不添加后面垫话": false,
        "v3语法改进": true,
        "menzi11#175": true
    }
    默认字典 = require("./dict/default/配置");
    常用 = require("./常用");
    随机 = require("./随机常用");
    生成(主题 = "学生会退会", 长度 = 6000 * 主题.length, _字典 = this.默认字典(主题), _选项 = this.默认选项) {
        this.选项 = this.常用.合并对象(_选项, this.默认选项);
        this.字典 = this.常用.合并对象(_字典, this.默认字典(主题));
        this.起段 = this.字典.起段;
        this.前面垫话 = this.字典.前面垫话;
        this.后面垫话 = this.字典.后面垫话;
        if (this.选项["menzi11#175"]) {
            this.下一句前面垫话 = this.随机.洗牌(this.字典.前面垫话);
            this.下一句后面垫话 = this.随机.洗牌(this.字典.后面垫话);
            this.下一句前面垫话到哪儿了 = 0;
            this.下一句后面垫话到哪儿了 = 0;
        }
        this.名人名言 = this.字典.名人名言;
        this.下一句名人名言 = this.随机.洗牌(this.字典.名人名言);
        this.下一句名人名言到哪儿了 = 0;
        this.下一句废话 = this.随机.洗牌(this.字典.废话);
        this.下一句废话到哪儿了 = 0;
        // ------------
        let 文章 = this.起段;
        let 缓冲 = "";
        写文: while (文章.length < 长度 || (this.选项.v3语法改进 ? (文章.trim()
                .endsWith("：") || 文章.trim()
                .endsWith(":") || 文章.trim()
                .endsWith(",") || 文章.trim()
                .endsWith("，")) : false)) {
            缓冲 = "";
            var 分支 = Math.floor(Math.random() * 100);
            if (分支 < 5 && (this.选项.v3语法改进 ? ((!this.起段 || !文章.endsWith(this.起段)) && !(文章.trim()
                    .endsWith(",")) && !(文章.trim()
                    .endsWith("，"))) : true)) {
                if (this.选项.v3语法改进 && this.常用.能否以句号结束(文章.trim())) 缓冲 = this.字典.句号;
                else 缓冲 = "";
                缓冲 += "\n";
                缓冲 += this.起段;
            } else if (分支 < 20) {
                let 言 = this.下一句名人名言[this.下一句名人名言到哪儿了];
                言 = 言.replace(/a/, (this.选项["menzi11#175"] ? this.下一句前面垫话[this.下一句前面垫话到哪儿了] : this.随机.瞎选一个(this.前面垫话)));
                if (!(this.选项.有概率不添加后面垫话 ? Math.floor(Math.random() * 10) == 1 : true)) {
                    言 = 言.replace(/b/, (this.选项["menzi11#175"] ? this.下一句后面垫话[this.下一句后面垫话到哪儿了] : this.随机.瞎选一个(this.后面垫话)));
                } else {
                    言 = 言.replace(/b/, "");
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
                缓冲 = 言;
            } else {
                缓冲 = this.下一句废话[this.下一句废话到哪儿了].replace(/x/g, 主题);
                if (this.下一句废话.length - 1 == this.下一句废话到哪儿了) { // todo: 这算 v3语法改进吗？
                    this.下一句废话 = this.随机.洗牌(this.字典.废话); // 不够，再洗一下
                    this.下一句废话到哪儿了 = 0;
                } else this.下一句废话到哪儿了++;
            } // else 缓冲 = "";
            文章 += 缓冲;
        }
        缓冲 = "";
        文章 = this.起段 + 文章.trim();
        return 文章;
    }
    constructor() {}
}
module.exports = 狗屁库;