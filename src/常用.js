/**
 * 常用类
 * @author Dobby233Liu
 */
class 常用 {
    /**
     * 检测字符串结尾是否有检测列表中的任意一段文字
     * @param {String} 字符串
     * @param {String[]} 检测列表
     * @returns {Boolean}
     */
    static 是否以字符串结束(字符串, 检测列表) {
        for (const i of 检测列表) {
            if (字符串.endsWith(i)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 把对象中所有元素覆盖到镜像上，不影响传入的镜像
     * @param {Object} 对象
     * @param {Object} 镜像
     * @returns {Object}
     */
    static 合并对象(对象, 镜像) {
        let 合成 = 镜像;
        for (let i in 对象) {
            if (i != "__proto__") {
                合成[i] = 对象[i];
            }
        }
        return 合成;
    }

    /**
     * 将段中的所有段落添加到文章里
     * @param {string[]} 文章
     * @param {string} 起段
     * @param {string} 段缓冲
     * @returns {string}
     */
    static 加段(文章, 起段 = "", 段缓冲) {
        let 分段 = 段缓冲
            .trimEnd()
            .split("\n")
            .map((x) => 起段 + x);
        文章 = 文章.concat(分段);
        return 文章;
    }

    /**
     * 返回数组中的最后一个元素
     * @param {any[]} 数组
     * @returns {any}
     */
    static 最后一项(数组) {
        return 数组[数组.length - 1];
    }

    /**
     * 返回文章中所有段落的长度
     * @param {string[]} 文章
     * @param {boolean} 加换行符长度 - 如果为真，把隐性的换行符也算在内
     * @returns {number}
     */
    static 总长(文章, 加换行符长度 = true) {
        const 换行符号长 = "\n".length;
        let 长 = 0;
        for (let i in 文章)
            长 += 文章[i].length + (加换行符长度 ? 换行符号长 : 0);
        return 长;
    }
}

module.exports = 常用;
