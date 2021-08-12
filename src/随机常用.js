class 随机常用 {
    constructor() {}
    /**
     * @param {Array} _数组
     */
    static 洗牌(_数组) { // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        var 数组 = _数组.slice();
        for (let i = 数组.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [数组[i], 数组[j]] = [数组[j],
                数组[i]
            ];
        }
        return 数组;
    }
    static 瞎选一个(数组) {
        let max = 数组.length;
        let min = 0;
        return 数组[Math.floor(Math.random() * (max - min)) + min];
    }
    static 洗牌遍历(数组, 重复度 = 1) {
        var 次数组 = [];
        for (var ii = 0; ii < 重复度; ii++) 次数组 = 次数组.concat(数组);
        次数组 = this.洗牌(次数组);
        return {
            next: (function (洗牌, _数组) {
                var i = 0;
                var 数组 = _数组.slice();
                return function __next__() {
                    const ret = 数组[i++];
                    if (!(i < 次数组.length)) {
                        数组 = 洗牌(数组);
                        i = 0;
                    }
                    return {
                        value: ret,
                        done: false,
                    };
                };
            })(this.洗牌, 次数组)
        };
    }
}
module.exports = 随机常用;