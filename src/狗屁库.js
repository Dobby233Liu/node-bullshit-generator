/**
 * node-bullshit-generator
 * @author Dobby233Liu
 * @license Anti-996 License 1.0
 */

const 常用 = require("./常用");
const 随机 = require("./随机常用");
const {
    逗号,
    非结段符号,
    使不能以句号结段的结段符号,
    标点符号,
} = require("./符号常量");

const 默认选项 = {
    /**
     * 如果为真，生成的每一句名人名言会有1/10的概率缺少后面垫话
     */
    有概率不添加后面垫话: false,
    /**
     * 如果为真，启用本库在原版狗屁不通文章生成器的基础上增加的主要针对语法的改进
     */
    v3语法改进: true,
    /**
     * 如果为真，启用原版 PR #175 中“显著降低垫话重复度”的功能
     */
    "menzi11#175": true,
    /**
     * 如果为真，生成过程中会调用字典中的callback函数
     */
    允许字典处理字符串: true,
    /**
     * 如果为真，生成函数会返回在生成过程中程序产生的“文章”数组
     */
    返回段落列表: false,
    /**
     * 如果为真，生成函数在计算文章字数时会将换行符和仍在生成的段落的字数也计算在内
     */
    能写少就写少: true,
    /**
     * 如果为真，生成函数会确保生成的文章的结尾带标点符号
     */
    文章结尾强制带标点符号: false,
};
const 默认字典 = require("./dict/default/配置");

/**
 * 库的主类
 * @author Dobby233Liu
 */
class 狗屁库 {
    /**
     * 生成一篇废话文章
     * @param {string} 主题
     * @param {number} 长度
     * @param {Object} 字典 - 应包含的属性见{@link dict/default/配置.js}
     * @param {Object} 选项 - 可用选项见 {@link 默认选项}
     * @returns {string|array} 如果选项中的 `返回段落列表` 属性为真，返回 array，否则返回 string
     */
    生成(
        主题 = "学生会退会",
        长度 = 6000 * 主题.length,
        字典 = 默认字典,
        选项 = 默认选项
    ) {
        if (
            typeof 选项.文章结尾强制带标点符号 == "undefined" &&
            typeof 选项.结段强制带标点符号 != "undefined"
        )
            // 确保兼容性
            选项.文章结尾强制带标点符号 = 选项.结段强制带标点符号;
        选项 = 常用.合并对象(选项, 默认选项);
        字典 = 常用.合并对象(字典, 默认字典);
        if (选项.允许字典处理字符串 && 字典.主题处理)
            主题 = 字典.主题处理(主题, 字典, 选项, 常用, 随机);

        const 起段 = 字典.起段.replace(/\{主题\}/g, 主题);
        const 前面垫话 = 字典.前面垫话;
        const 后面垫话 = 字典.后面垫话;
        const 名人名言 = 字典.名人名言;
        const 废话 = 字典.废话;
        const 洗牌遍历重复度 = 选项.v3语法改进 ? 1 : 2;
        const 下一句前面垫话 = 选项["menzi11#175"]
            ? 随机.洗牌遍历(前面垫话, 洗牌遍历重复度)
            : [];
        const 下一句后面垫话 = 选项["menzi11#175"]
            ? 随机.洗牌遍历(后面垫话, 洗牌遍历重复度)
            : [];
        const 下一句名人名言 = 随机.洗牌遍历(名人名言, 洗牌遍历重复度);
        const 下一句废话 = 随机.洗牌遍历(废话, 洗牌遍历重复度);

        let 文章 = [];
        let 段缓冲 = "";
        const 最后一段 = () => {
            let 段 = 段缓冲.length <= 0 ? 常用.最后一项(文章) : 段缓冲;
            return 段 ? 段.trim() : "";
        };
        while (
            常用.总长(文章, 选项.能写少就写少) +
                (选项.能写少就写少 ? 段缓冲.length : 0) <
                长度 ||
            (选项.v3语法改进 &&
                常用.是否以字符串结束(最后一段(), 非结段符号)) ||
            (选项.文章结尾强制带标点符号 &&
                !常用.是否以字符串结束(最后一段(), 标点符号))
        ) {
            let 缓冲 = "";
            let 类型 = "忽略";

            const 分支 = 随机.取随机数(100);
            if (
                分支 < 5 &&
                (!选项.v3语法改进 ||
                    !(
                        段缓冲.length <= 0 ||
                        常用.是否以字符串结束(段缓冲.trim(), 逗号)
                    ))
            ) {
                类型 = "新行";
            } else if (分支 < 20) {
                类型 = "名人名言";
            } else {
                类型 = "废话";
            }

            if (
                类型 == "新行" &&
                (!选项.v3语法改进 ||
                    !常用.是否以字符串结束(
                        段缓冲.trim(),
                        使不能以句号结段的结段符号
                    ))
            ) {
                缓冲 = 字典.句号.replace(/\{主题\}/g, 主题);
            } else if (类型 == "名人名言") {
                缓冲 = 下一句名人名言
                    .next()
                    .value.replace(/\{前面垫话\}/g, () =>
                        (选项["menzi11#175"]
                            ? 下一句前面垫话.next().value
                            : 随机.瞎选一个(前面垫话)
                        ).replace(/\{主题\}/g, 主题)
                    )
                    .replace(
                        /\{后面垫话\}/g,
                        !选项.有概率不添加后面垫话 || 随机.取随机数(10) != 1
                            ? () =>
                                  (选项["menzi11#175"]
                                      ? 下一句后面垫话.next().value
                                      : 随机.瞎选一个(后面垫话)
                                  ).replace(/\{主题\}/g, 主题)
                            : ""
                    );
            } else if (类型 == "废话") {
                缓冲 = 下一句废话.next().value.replace(/\{主题\}/g, 主题);
            }

            if (选项.允许字典处理字符串 && 字典.缓冲处理)
                缓冲 = 字典.缓冲处理(缓冲, 字典, 选项, 常用, 随机, 类型);
            段缓冲 += 缓冲;
            if (类型 == "新行") {
                文章 = 常用.加段(文章, 起段, 段缓冲);
                段缓冲 = "";
            } else if (段缓冲.includes("\n")) {
                // 段落已包含换行符，但还未换行
                let 最后一个换行符 = 段缓冲.lastIndexOf("\n");
                if (最后一个换行符 + 1 < 段缓冲.length) {
                    // 确保不吃掉在生成的段落
                    let 实际可加的文字 = 段缓冲.substring(0, 最后一个换行符);
                    let 不加的文字 = 段缓冲.substring(
                        最后一个换行符 + 1,
                        段缓冲.length
                    );
                    文章 = 常用.加段(文章, 起段, 实际可加的文字);
                    段缓冲 = 不加的文字;
                } else {
                    文章 = 常用.加段(文章, 起段, 段缓冲);
                    段缓冲 = "";
                }
            }
        }

        // 循环结束后是否未加段
        if (段缓冲 != "") 文章 = 常用.加段(文章, 起段, 段缓冲);
        段缓冲 = "";

        if (选项.允许字典处理字符串 && 字典.文章处理)
            文章 = 字典.文章处理(文章, 字典, 选项, 常用, 随机);
        if (!选项.返回段落列表) 文章 = 文章.join("\n");
        return 文章;
    }

    generate = this.生成;
}

module.exports = 狗屁库;
