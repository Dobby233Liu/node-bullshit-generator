// the mini lodash for bslib
// @author Dobby233Liu
class 常用 {
    static 能否以句号结束(_tmp2) {
        var tmp2 = _tmp2.trim(); // temp postprocess
        return !tmp2.endsWith("。") && !tmp2.endsWith(".") && !tmp2.endsWith("：") && !tmp2.endsWith(":") && !tmp2.endsWith("？") && !tmp2.endsWith("?") && !tmp2.endsWith("！") && !tmp2.endsWith("!") && !tmp2.endsWith(",") && !tmp2.endsWith("，");
    }
    static 合并对象(less, much) {
        var ret = much;
        console.log("much", Object.keys(much));
        console.log("less", Object.keys(much));
        for (var i in less) {
            if (i != "__proto__") {
                console.log("SETTING much['" + i + "'] to equ in less");
                console.log(ret[i] ? ret[i] : undefined, less[i]);
                console.log(ret[i] ? "replace" : "new");
                ret[i] = less[i];
            }
        }
        return ret;
    }
}
module.exports = 常用;