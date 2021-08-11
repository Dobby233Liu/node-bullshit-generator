let roster = {}
roster["onTheme"] = function onTheme(theme)
{
    return theme.toLowerCase()
}
let prefix2Machine = {}
roster["onSegment"] = function onSegment(seg, dict, opt, useless, rng) {
    if (seg.indexOf("{prefix2}") > -1) {
        if (prefix2Machine.length <= 0) prefix2Machine = opt["menzi11#175"] ? rng.洗牌遍历(dict["prefix_2"]) : {
            next: function () {
                return {
                    value: rng.瞎选一个(dict["prefix_2"]),
                    done: false
                }
            }
        }
        return prefix2Machine.next().value + seg.replace(/\{prefix2\}/g, "")
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