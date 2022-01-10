class 随机常用 {
    constructor() {}
    static 取随机小数() {
        return Math.random()
    }
    /**
     * @param {Array} _数组
     *
     * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     */
    static 洗牌(_数组) {
        var 数组 = _数组.slice();
        for (let i = 数组.length - 1; i > 0; i--) {
            const j = Math.floor(this.取随机小数() * (i + 1));
            [数组[i], 数组[j]] = [数组[j],
                数组[i]
            ];
        }
        return 数组;
    }
    static 瞎选一个(数组) {
        let max = 数组.length;
        let min = 0;
        return 数组[Math.floor(this.取随机小数() * (max - min)) + min];
    }
    static 洗牌遍历(数组, 重复度 = 1) {
        let 次数组 = [];
        let i = 0;
        const 洗牌 = this.洗牌;
        for (var ii = 0; ii < 重复度; ii++) 次数组 = 次数组.concat(数组);
        次数组 = this.洗牌(次数组);
        return {
            next: function __next__() {
                const ret = 次数组[i++];
                if (!(i < 次数组.length)) {
                    次数组 = 洗牌(次数组);
                    i = 0;
                }
                return {
                    value: ret,
                    done: false,
                };
            }
        };
    }
    static 取随机数(最大数) {
        return Math.floor(this.取随机小数() * 最大数)
    }
}
module.exports = 随机常用;