let roster = {}
roster["onTheme"] = function onTheme(theme)
{
    return theme.toLowerCase()
}
let prefix2Machine = {}
let examplesMachine = {}

function oh_noes(arr, opt, rng) {
    return opt["menzi11#175"] ? rng.洗牌遍历(arr) : {
        next: function () {
            return {
                value: rng.瞎选一个(arr),
                done: false
            }
        }
    }
}
roster["onSegment"] = function onSegment(seg, dict, opt, useless, rng, type) {
    if (seg.indexOf("{prefix2}") > -1) {
        if (prefix2Machine.length <= 0) prefix2Machine = oh_noes(dict["prefix_2"], opt, rng)
        seg = prefix2Machine.next().value + seg.replace(/\{prefix2\}/g, "")
    }
    if (type == "名人名言") {
        if (examplesMachine.length <= 0) examplesMachine = oh_noes(dict["examples"], opt, rng)
        seg = examplesMachine.next().value + seg
    } else if (type == "废话") {
        if ((Math.floor(Math.random() * 100) - 20) <= 45) {
            if (addingsMachine.length <= 0) addingsMachine = oh_noes(dict["addings"], opt, rng)
            seg = contrastsMachine.next().value + seg
        } else {
            if (contrastsMachine.length <= 0) contrastsMachine = oh_noes(dict["contrasts"], opt, rng)
            seg = contrastsMachine.next().value + seg
        }
    }
    return seg
}
roster["onArticle"] = function onArticle(article) {
    article = article.replace('  ', ' ').replace('. .', '.').replace('? .', '?').replace(', .', ',').replace('..', '.')
    const lst = article.split(' ')
    for (i in lst) {
        if (lst[i].endsWith(',') || lst[i].endsWith(':')) lst[i + 1] = lst[i + 1].lower()
    }
    return lst.join(' ')
}
module.exports = roster