let roster = {}

roster["onTheme"] = function onTheme(theme)
{
    return theme.toLowerCase()
}

const db = require("./db")
let prefix2Machine = "lel"

roster["onSegment"] = function onSegment(seg, dict, opt, useless, rng){
    if (seg.indexOf("{prefix2}") > -1) {
        if (prefix2Machine == "lel") prefix2Machine = rng.洗牌遍历(db["prefix_2"])
        return seg.replace(/\{prefix2\}/g, prefix2Machine.next().value)
    }
    return seg
}
