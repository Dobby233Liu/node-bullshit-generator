let roster = {}

roster["onTheme"] = function onTheme(theme)
{
    return theme.toLowerCase()
}

const db = require("./db")
let prefix2Machine = {}

roster["onSegment"] = function onSegment(seg, dict, opt, useless, rng){
    if (seg.indexOf("{prefix2}") > -1) {
        if (prefix2Machine == {}) prefix2Machine = rng.洗牌遍历(db["prefix_2"])
        return prefix2Machine.next().value + seg.replace(/\{prefix2\}/g, "")
    }
    return seg
}
