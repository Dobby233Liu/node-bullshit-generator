const 常用 = require("./常用");

/**
 * 随机相关的函数
 * @author Dobby233Liu
 */
class 随机常用 {
    /**
     * 返回0-1之间的随机小数
     * @returns {number}
     */
    static 取随机小数() {
        return Math.random();
    }

    /**
     * 返回0-最大数之间的随机整数，不包括最大数
     * @param {number} 最大数
     * @returns {number}
     */
    static 取随机数(最大数) {
        return Math.floor(this.取随机小数() * 最大数);
    }

    /**
     * 在数组中选择一个随机的元素
     * @param {any[]} 数组
     * @returns {any}
     */
    static 瞎选一个(数组) {
        return 数组[this.取随机数(数组.length)];
    }

    /**
     * 洗乱一个数组中的内容，而不影响原数组
     * @param {any[]} 数组
     * @returns {any[]}
     * @see {@link https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array}
     */
    static 洗牌(数组) {
        let 洗牌后数组 = 数组.slice();
        for (let i = 洗牌后数组.length - 1; i > 0; i--) {
            const j = this.取随机数(i + 1);
            [洗牌后数组[i], 洗牌后数组[j]] = [洗牌后数组[j], 洗牌后数组[i]];
        }
        return 洗牌后数组;
    }

    /**
     * 返回一个迭代器，其将（重复度次重复并）洗牌过的数组中的元素按顺序返回，
     * 完毕后再次洗牌并从头开始
     * @param {any[]} 数组
     * @param {number} 重复度
     * @yields {any}
     */
    static *洗牌遍历(数组, 重复度 = 2) {
        let 洗牌后数组 = 常用.重复(数组, 重复度);

        while (true) {
            洗牌后数组 = this.洗牌(洗牌后数组);
            for (let 返回值 of 洗牌后数组) yield 返回值;
        }
    }
}

module.exports = 随机常用;
