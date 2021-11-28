// 常用类
// @author Dobby233Liu
class 常用 {
    static 是否以字符串结束(字符串, 检测列表) {
        for (var i of 检测列表) {
            if (字符串.endsWith(i)) {
                return true
                break
            }
        }
        return false
    }
    static 能否以句号结束(段落) {
        return !this.是否以字符串结束(段落.trim(), ["。", ".", "：", ":", "？", "?", "！", "!", ",", "，", "、"]);
    }
    static 合并对象(对象, 镜像) {
        var 合成 = 镜像;
        for (var i in 对象) {
            if (i != "__proto__") {
                合成[i] = 对象[i];
            }
        }
        return 合成;
    }
    // 分段系统实用函数
    static 能加段(段) {
        return 段.indexOf("\n") > 0;
    }
    static 加段(列表, 段) {
        var 分 = 段.trimEnd().split("\n");
        for (var i in 分) {
            列表.push(分[i]);
        }
        return 列表;
    }
    static 最后一项(列表) {
        return 列表[列表.length - 1];
    }
    static 总长(列表) {
        var 长 = 0;
        for (var i in 列表) 长 += 列表[i].length;
        return 长;
    }
}
module.exports = 常用;
