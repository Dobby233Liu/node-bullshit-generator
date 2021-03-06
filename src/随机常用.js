class 随机常用 {
    constructor() {}
    /**
     * @param {Array} 数组
     */
    static 洗牌(数组) { // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
}
module.exports = 随机常用;