/*
 * libBullshit / 狗屁库
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */
class 狗屁库 {
    默认选项 = {
        "有概率不添加后面垫话": false,
        "v3语法改进": true,
        "menzi11#175": true,
        "允许字典处理字符串": true
    }
    默认字典 = require("./dict/default/配置");
    常用 = require("./常用");
    随机 = require("./随机常用");
    生成(主题 = "学生会退会", 长度 = 6000 * 主题.length, _字典 = this.默认字典, _选项 = this.默认选项) {
        this.选项 = this.常用.合并对象(_选项, this.默认选项);
        this.字典 = this.常用.合并对象(_字典, this.默认字典);
        if (this.选项["允许字典处理字符串"] && this.字典["主题处理"] && typeof this.字典["主题处理"] == "function") 主题 = this.字典["主题处理"](主题, this.字典, this.选项, this.常用, this.随机);
        this.起段 = this.字典.起段;
        this.前面垫话 = this.字典.前面垫话;
        this.后面垫话 = this.字典.后面垫话;
        if (this.选项["menzi11#175"]) {
            this.下一句前面垫话 = this.随机.洗牌遍历(this.字典.前面垫话);
            this.下一句后面垫话 = this.随机.洗牌遍历(this.字典.后面垫话);
        }
        this.下一句名人名言 = this.随机.洗牌遍历(this.字典.名人名言);
        this.下一句废话 = this.随机.洗牌遍历(this.字典.废话);
        // ------------
        var 文章 = this.起段.replace(/\{主题\}/g, 主题);
        var 缓冲 = "";
        var 类型 = "忽略";
        写文: while (文章.length < 长度 || (this.选项.v3语法改进 && (文章.trim().endsWith("：") || 文章.trim().endsWith(":") || 文章.trim().endsWith(",") || 文章.trim().endsWith("，")))) {
            缓冲 = "";
            类型 = "忽略";
            let 分支 = Math.floor(Math.random() * 100);
            if (分支 < 5 && (!this.选项.v3语法改进 || (!(文章.endsWith(this.起段)) && !(文章.trim().endsWith(",")) && !(文章.trim().endsWith("，"))))) {
                if (!this.选项.v3语法改进 || this.常用.能否以句号结束(文章.trim())) 缓冲 = this.字典.句号.replace(/\{主题\}/g, 主题);
                else 缓冲 = "";
                缓冲 += "\n";
                缓冲 += this.起段.replace(/\{主题\}/g, 主题);
                类型 = "新行";
            } else if (分支 < 20) {
                let 言 = this.下一句名人名言.next().value;
                言 = 言.replace(/\{前面垫话\}/g, (this.选项["menzi11#175"] ? this.下一句前面垫话.next().value : this.随机.瞎选一个(this.前面垫话)).replace(/\{主题\}/g, 主题));
                if (!this.选项.有概率不添加后面垫话 || Math.floor(Math.random() * 10) != 1) {
                    言 = 言.replace(/\{后面垫话\}/g, (this.选项["menzi11#175"] ? this.下一句后面垫话.next().value : this.随机.瞎选一个(this.后面垫话)).replace(/\{主题\}/g, 主题));
                } else {
                    言 = 言.replace(/\{后面垫话\}/g, "");
                }
                缓冲 = 言;
                类型 = "名人名言";
            } else {
                缓冲 = this.下一句废话.next().value.replace(/\{主题\}/g, 主题);
                类型 = "废话";
            } // else 缓冲 = "";
            // hack
            if (this.选项["允许字典处理字符串"] && this.字典["缓冲处理"] && typeof this.字典["缓冲处理"] == "function") {
                文章 += this.字典["缓冲处理"](缓冲, this.字典, this.选项, this.常用, this.随机, 类型);
            }
            else 文章 += 缓冲;
        }
        缓冲 = "";
        if (this.选项["允许字典处理字符串"] && this.字典["文章处理"] && typeof this.字典["文章处理"] == "function") 文章 = this.字典["文章处理"](文章, this.字典, this.选项, this.常用, this.随机);
        return 文章;
    }
    constructor() {}
}
module.exports = 狗屁库;
