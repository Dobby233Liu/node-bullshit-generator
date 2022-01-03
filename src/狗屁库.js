/*
 * libBullshit / 狗屁库
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */
const 逗号 = [",", "，", "、"];
const 冒号 = ["：", ":"];
const 非结段符号 = [...逗号, ...冒号];
const 默认选项 = {
    "有概率不添加后面垫话": false,
    "v3语法改进": true,
    "menzi11#175": true,
    "允许字典处理字符串": true,
    "返回段落列表": false,
    "能写少就写少": true
}
const 默认字典 = require("./dict/default/配置");
class 狗屁库 {
    constructor() {}
    常用 = require("./常用");
    随机 = require("./随机常用");
    生成(主题 = "学生会退会", 长度 = 6000 * 主题.length, 字典 = 默认字典, 选项 = 默认选项) {
        选项 = this.常用.合并对象(选项, 默认选项);
        字典 = this.常用.合并对象(字典, 默认字典);
        if (选项["允许字典处理字符串"] && 字典["主题处理"] && typeof 字典["主题处理"] == "function") 主题 = 字典["主题处理"](主题, 字典, 选项, this.常用, this.随机);
        let 起段 = 字典.起段.replace(/\{主题\}/g, 主题);
        let 前面垫话 = 字典.前面垫话;
        let 后面垫话 = 字典.后面垫话;
        let 下一句前面垫话 = {};
        let 下一句后面垫话 = {};
        if (选项["menzi11#175"]) {
            下一句前面垫话 = this.随机.洗牌遍历(前面垫话);
            下一句后面垫话 = this.随机.洗牌遍历(后面垫话);
        }
        let 下一句名人名言 = this.随机.洗牌遍历(字典.名人名言);
        let 下一句废话 = this.随机.洗牌遍历(字典.废话);
        // ------------
        var 文章 = [];
        var 段缓冲 = "";
        var 类型 = "忽略";
        while ((this.常用.总长(文章, 选项["能写少就写少"]) + (选项["能写少就写少"] ? 段缓冲.length : 0) < 长度) || (选项.v3语法改进 && this.常用.是否以字符串结束(this.常用.这是啥我也不知道(段缓冲, 文章).trim(), 非结段符号))) {
            var 缓冲 = "";
            类型 = "忽略";
            let 分支 = this.随机.取随机数(100);
            if (分支 < 5 && ((!选项.v3语法改进) || !(段缓冲.length <= 0 || this.常用.是否以字符串结束(段缓冲.trim(), 逗号)))) {
                类型 = "新行";
            } else if (分支 < 20) {
                类型 = "名人名言";
            } else {
                类型 = "废话";
            }
            if (类型 == "新行") {
                if (!选项.v3语法改进 || this.常用.能否以句号结束(段缓冲.trim())) 缓冲 = 字典.句号.replace(/\{主题\}/g, 主题);
            } else if (类型 == "名人名言") {
                let 言 = 下一句名人名言.next().value;
                言 = 言.replace(/\{前面垫话\}/g, (选项["menzi11#175"] ? 下一句前面垫话.next().value : this.随机.瞎选一个(前面垫话)).replace(/\{主题\}/g, 主题));
                let 替换 = "";
                if (!选项.有概率不添加后面垫话 || this.随机.取随机数(10) != 1) {
                    替换 = (选项["menzi11#175"] ? 下一句后面垫话.next().value : this.随机.瞎选一个(后面垫话)).replace(/\{主题\}/g, 主题);
                }
                言 = 言.replace(/\{后面垫话\}/g, 替换);
                缓冲 = 言;
            } else if (类型 == "废话") {
                缓冲 = 下一句废话.next().value.replace(/\{主题\}/g, 主题);
            }
            // hack
            if (选项["允许字典处理字符串"] && 字典["缓冲处理"] && typeof 字典["缓冲处理"] == "function") {
                段缓冲 += 字典["缓冲处理"](缓冲, 字典, 选项, this.常用, this.随机, 类型);
            }
            else 段缓冲 += 缓冲;
            if (this.常用.能加段(段缓冲) || 类型 == "新行") {
                文章 = this.常用.加段(文章, 起段 + 段缓冲);
                段缓冲 = "";
            }
        }
        if (段缓冲 != "") 文章 = this.常用.加段(文章, 起段 + 段缓冲);
        段缓冲 = "";
        if (选项["允许字典处理字符串"] && 字典["文章处理"] && typeof 字典["文章处理"] == "function") 文章 = 字典["文章处理"](文章, 字典, 选项, this.常用, this.随机);
        if (!选项["返回段落列表"]) 文章 = 文章.join("\n");
        return 文章;
    }
    generate = this.生成;
}
module.exports = 狗屁库;
