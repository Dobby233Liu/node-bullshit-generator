class 随机常用 {
    constructor() {}
    /**
     * @param {Array} _数组
     */
    static 洗牌(_数组) { // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        var 数组 = _数组;
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
        for (var ii = 0; i < 重复度; i++) 次数组.concat(数组);
        次数组 = this.洗牌(次数组);
        var i = 0;
        return {
            next: ((洗牌) => {
                i = 0;
                return function __next__() {
                    if (i >= 次数组.length) {
                        次数组 = 洗牌(次数组);
                        i = 0;
                    }
                    var val = 次数组[i];
                    i++;
                    return {
                        value: val,
                        done: false
                    };
                }
            })(this.洗牌)
        };
    }
}
module.exports = 随机常用;