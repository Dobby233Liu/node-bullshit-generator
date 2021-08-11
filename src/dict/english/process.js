let roster = {}

roster["onTheme"] = function onTheme(theme)
{
    return theme.toLowerCase()
}

const db = require("./db")
const p2 = db["prefix_2"]
let prefix2Machine = {}

roster["onSegment"] = function onSegment(seg, dict, opt, useless, rng){
    if (seg.indexOf("{prefix2}") > -1) {
        if (prefix2Machine.length <= 0) prefix2Machine = rng.洗牌遍历(p2)
        return prefix2Machine.next().value + seg.replace(/\{prefix2\}/g, "")
    }
    return seg
}
