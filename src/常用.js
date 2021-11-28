// the utilty
// @author Dobby233Liu
class 常用 {
    static 是否以字符串结束(字符串, 列表) { // endsWith
        var ret = false;
        for (var i of 列表)
            if (字符串.endsWith(i)) {
                ret = true
                break
            }
        return ret
    }
    static 能否以句号结束(段落) {
        return !this.是否以字符串结束(段落.trim(), ["。", ".", "：", ":", "？", "?", "！", "!", ",", "，", "、"]);
    }
    static 合并对象(less, much) {
        var ret = much;
        for (var i in less) {
            if (i != "__proto__") {
                ret[i] = less[i];
            }
        }
        return ret;
    }
}
module.exports = 常用;